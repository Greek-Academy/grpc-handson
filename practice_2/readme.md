# Practice 2: Call a function on server from client

## Server side

### Run the server

Install packages

```shell
$ npm intall
```

Generate codes

```shell
$ npm run generate
$ npm run generate-desc
```

Run server (Defined the script on package.json)

```shell
$ npm run server
```

### Try to send a request with grpcurl

`grpcurl` is CUI tool you interact with gRPC servers. This tool is like `curl` you know.
gRPCurl repository: https://github.com/fullstorydev/grpcurl

1. Insatall gRPCurl

**MacOS**

```shell
brew install grpcurl
```

**Windows**  
Look [here](https://qiita.com/yukina-ge/items/a84693f01f3f0edba482)

- Need go lang
- Install from source

2. Send commands to localhost server

Check service list

```shell
$ grpcurl -plaintext localhost:50051 list
```

Send message to the server

```shell
$ grpcurl -plaintext -d '{"message":"hello"}' localhost:50051 chatservice.ChatService/Chat
```

## Client side

Run the client script

```shell
$ npm run client
```

### Send any message with editing code

Edit [this code](/practice_2/client/src/index.ts)

## Next step

go to next > [practice_3](/practice_3/)
