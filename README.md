# Nextjs issue demo explicit specification `no-store`

## To Reproduce

1. `pnpm clean-start`.
2. access `http://localhost:3000/default`, todo content is fixed.
3. access `http://localhost:3000/no-store`, todo content is dynamic.

## Current vs. Expected behavior

I think it should be as documented.

https://rc.nextjs.org/docs/app/api-reference/functions/fetch#optionscache

> Next.js fetches the resource from the remote server on every request without looking in the cache

## Provide environment information

```shell session
$ pnpm next info

Operating System:
  Platform: darwin
  Arch: arm64
  Version: Darwin Kernel Version 23.3.0: Wed Dec 20 21:30:44 PST 2023; root:xnu-10002.81.5~7/RELEASE_ARM64_T6000
  Available memory (MB): 65536
  Available CPU cores: 10
Binaries:
  Node: 20.12.2
  npm: 9.8.0
  Yarn: 1.22.22
  pnpm: 8.15.7
Relevant Packages:
  next: 15.0.0-rc.0 // Latest available version is detected (15.0.0-rc.0).
  eslint-config-next: N/A
  react: 19.0.0-rc-935180c7e0-20240524
  react-dom: 19.0.0-rc-935180c7e0-20240524
  typescript: 5.4.5
Next.js Config:
  output: N/A
```
