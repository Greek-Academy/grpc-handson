# Practice 1: Build proto and check generated files

## Installation

Install Protocol Buffer Compiler.  
**MacOS**  
ref. https://grpc.io/docs/protoc-installation/

    $ brew install protobuf
    $ which protoc

**Windows**  
ref. https://qiita.com/nzer0/items/7208c880693e63ca247a#win

## Compile a proto file

`protoc` commands generate code for client side, server side and type definition of Typescript. Let's execute commands as shown below and check files will be generated.

1. make a directory for output.

```shell
$ mkdir .generated
```

2. install npm packages

```shell
$ npm install
```

3. generate code with using protoc command.

```shell
$ protoc -I=proto --ts_out=.generated ChatService.proto
```

If got an error of `protoc-gen-ts is not found`, add `proto-gen-ts`'s path.

```shell
#!/bin/bash
# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./.generated"

mkdir -p ${OUT_DIR}

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --ts_out="${OUT_DIR}" \
    ./proto/ChatService.proto
```

## Add a new field to ChatService

Let's add the count of reactions field to ChatService. You can see the data types of protobuf from here.  
https://protobuf.dev/programming-guides/proto3/

1. add a new field to `ChatService`

```proto
message ChatMessage {
    string message = 1;
    // add here.
    // e.g. int64 count_of_reactions = 2;
}
```

2. compile again with the `protoc` command.
3. check generated code and difference previous one.

## Next steps

go to next > [practice_2](/practice_2/)
