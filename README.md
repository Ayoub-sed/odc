# Orange 2023 - End of studies challenge

## Assignment [Github Link](https://github.com/odc-student/orange-end-of-studies-challenge-23)

You will get an invitation via email to join the Github Orange Student Organisation. You will have to accept the invitation to join the assignment.

### Overview

To complete this challenge, you will need to write a simple web app, and provide us the source files to be built.
The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of pages and an API feed.
We will also assess the generated HTML, CSS, and JS output.

This challenge is expected to take about 4-6 hours.

### The challenge

### Details

Build a stock management **MERN** Stack (MongoDB, Express JS, React-Redux, Node JS) web
application with the following requirements:

- Manager

❏ As a **manager** I can sign in.

❏ As a **manager** I can create new user/item.

❏ As a **manager** I can edit an existing user/item.

❏ As a **manager** I can view all the existing users/items.

❏ As a **manager** I can delete any particular user/item.

❏ As a **manager** I can sign out.

- User

❏ As a **user** I can sign in/up.

❏ As a **user** I can not see the list of users.

❏ As a **user** I can add a new item.

❏ As a **user** I can edit an existing item.

❏ As a **user** I can view all the existing items.

❏ As a **user** I can delete any particular item.

❏ As a **user** I can check the stock of any particular item.

❏ As a **user** I can increment and decrement the stock of any particular item.

❏ As a **user** I can view all the details of any particular item.

❏ As a **user** I can sign out.

### Instructions

- The UI of the application should be appealing and easy to use
- The application should justify the area of the problem statement
- Clean and sustainable code will be appreciated. Code should be readable/easily
- understandable
- Separate `frontend` and `backend` folders

### Frontend Details

You will need to build the following 5 pages with React:

- A **Register Page**
- A **Login Page**
- A **Home Page**
- A **Users Page**
- A **Items Page**

## Backend structure

```sh
.
├── index.js
├── src
│   ├── controllers
│   │   ├── AuthController.js
│   │   └── ItemController.js
│   ├── middlewares
│   │   ├── multer.js
│   │   └── verify-token.js
│   ├── models
│   │   ├── ItemModel.js
│   │   └── UserModel.js
│   └── routes
│       ├── item.js
│       └── auth.js
├── uploads
│   └── images.*
└── package.json
```

# Let's start

### Clone the Repository

```sh
git clone https://github.com/odc-student/orange-end-of-studies-challenge-23.git

```

### Create new branch

```sh
git checkout -b <your-branch-name>
```

### Push the changes to your remote repository

Now that you have completed the Markdown exercise, push your changes and new files to your version of the exercise branch.

First you will have to stage all of your changes by adding them, if your current working directory is in the repository, then you simple have to stage all the new files:

```

git add .

```

Now that the files are staged, commit them to your local repository and include a commit message (note that you do not have to use the same commit message `completed the project` and you can choose something else that you feel is descriptive and informative, just be sure to keep the `""`):

```

git commit -m "completed the project"

```

With the changes committed to your local repository, you can now push them to your remote host on GitHub:

```

git push

```

### Share your folder by pull request

You need to share your work with us, add them to the course repository that you had initially forked with a pull request.

> Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before the changes are merged into the repository.

Begin by going to [https://github.com/odc-student/orange-end-of-studies-challenge-23](https://github.com/odc-student/orange-end-of-studies-challenge-23) and clicking on the **Pull requests** button near the top then **New pull request** .

This will bring you to a page that will allow you to compare across changes. Since you wish to submit changes on a different fork, then click on the hyperlinked phrase **compare across forks**.

Then change the head fork to your own copy of the repository. Note that as of Feb. 2021, the primary branch of this repository is called `main` and not `master`. So your pull request will be slightly different than what's shown in the screenshots below.

![](images/screen-shot-pull-req.png)

Once you have done this, you have _opened a pull request_. GitHub then makes it possible for you to review the differences between the two repositories. You can then write a message about this merge. It is always important for these messages to be thorough and thoughtful.

![](images/screen-shot-pull-req2.png)

When you complete the message click the green **Create pull request** button.

Your changes to the repository will not be incorporated into the original repository until one of the repository administrators reviews and accepts the edits.

```

```
# odc
