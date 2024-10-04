# Practice 4: Try to use flatbuffer

## Install flatc

`flatc` is the compiler for flatbuffers.
`flatbuffers` repository is [here](https://github.com/google/flatbuffers).
You need the build tool (e.g. cmake or bazel) for installation of flatbuffers.

- cmake: https://cmake.org/
- bazel: https://bazel.build/install

I have installed bazel in my PC. So, built like these,

```shell
$ git clone https://github.com/google/flatbuffers.git
$ bazel build flatc
```

If use cmake, follow the official document page.  
https://flatbuffers.dev/flatbuffers_guide_building.html

## Compile .fbs file

```shell
$ flatc --ts -o .generated flatbuf/chat.fbs
```

**Note**

- Need `.generated` directory.
- Can generate with each language if set option your expectation. [document](https://flatbuffers.dev/flatbuffers_guide_using_schema_compiler.html)
- Convinient if set path paramter or alias to `flatc` binary

## More information

- [Flatbuffers: Proframmer's guide](https://flatbuffers.dev/usergroup0.html)
- [Flatbuffers: Use in typescript](https://flatbuffers.dev/flatbuffers_guide_use_typescript.html)
