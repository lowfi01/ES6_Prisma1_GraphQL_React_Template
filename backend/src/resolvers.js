const resolvers = {
  Query: {
    publishedPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } })
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.postId })
    },
    postsByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts()
    },
    fetchUsers(root, args, context) {
      return context.prisma.users();
    },
    fetchJobs(root, args, context) {
      return context.prisma.jobs();
    }
  },
  Mutation: {
    createDraft(root, args, context) {
      return context.prisma.createPost(
        {
          title: args.title,
          author: {
            connect: { id: args.userId }
          }
        },
      )
    },
    hireUser(root, args, context){
      return context.prisma.updateJob(
        {
          where: { id: args.jobId },
          data: {
               employee: {
                 connect:  {
                    id: args.userId
                 }
              }
         }
        }
      )
    },
    publish(root, args, context) {
      return context.prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true }
        }
      )
    },
    createUser(root, args, context) {
      return context.prisma.createUser(
        { name: args.name, email: args.email },
      )
    },
    createJob(root, args, context) {
      return context.prisma.createJob(
        { title: args.title }
      )
    }
  },
  User: {
    posts(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).posts()
    },
    jobs(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).jobs()
    },
  },
  Post: {
    author(root, args, context) {
      return context.prisma.post({
        id: root.id
      }).author()
    }
  },
  Job: {
    employee(root, args, context) {
      return context.prisma.job({
        id: root.id
      }).employee()
    }
  }

}

module.exports = resolvers