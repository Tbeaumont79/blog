---
title: Building a Real-Time Chat App, my Journey with Mercure and Symfony
slug: 23-02-2025-myjourney-mercureandsymfony
date: Feb 23, 2025
description: I've created a chat app using symfony and mercure, in this blog post i will tell you how to setup mercure with docker and symfony.
coverImage: https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80
readingTime: "5 minutes"
---

# Setup

First you need to know if the docker desktop app is running, otherwise you should launch it. Next we need to create the symfony app project :

```
symfony new chat
```

Then we need to install the mercure bundle so we can follow the documentation [here](https://symfony.com/doc/current/mercure.html)

```
composer require mercure
```

Make sure to type Yes when he ask for the installation with docker. And we can run the docker container with the following command:

```
docker compose up -d
```

You will find the container in the docker desktop app, and you can access it with the url `http://localhost:8000/.well-known/mercure`, the page should be blank it means that the container is running.

Mercure is now ready to be used.
