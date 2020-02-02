
## Getting started

1. Clone this repo
2. Run `npm install` to grab dependencies from npm.
3. Start prisma and database instance using `docker-compose up -d` (Run `yarn deploy -n` to use prisma demo servers)
4. Deploy the datamodel using `prisma deploy`
5. Start the server using `npm run dev`

(Use npm run start to run without watch mode)

## Example, Queries and Mutations

```
query fetchUsers {
  fetchUsers {
    id
    name
    email
    posts {
      id
      title
    }
    jobs {
      title
    }
  }
}

query fetchJobs {
  fetchJobs {
    id
    title
  }
}

mutation hireUser {
  hireUser(jobId:"ck581zisg00xh072309w629kq", userId: "ck585hypc010y0723wyucydym", title: "title here", email: "jamesh@gmail.com"){
   	title
    employee {
      id
    }
  }
}

mutation createJob {
  createJob(title: "Programmer"){
    title
  }
}

mutation createDraft {
  createDraft(
    title: "GraphQL is great!!!!"
    userId: "ck57zesit00wk0723mbfv1sn8"
  ) {
    id
    title
    published
    author {
      id
    }
  }
}

mutation createUser {
  createUser(name: "James H", email: "jamesh@gmail.com") {
    name
    email
  }
}

mutation publistPosts {
  publish(postId: "__USER_ID__"){
    title
    published
  }
}
```
