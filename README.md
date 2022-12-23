[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.4.8/total?label=Download%40v1.4.8&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.4.8)
[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.4.4/total?label=Download%40v1.4.4&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.4.4)
[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.3.8/total?label=Download%40v1.3.8&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.3.8)

[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.5.0-dev/total?label=Download%40v1.5.0-dev&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.5.0-dev)
[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.4.1-dev/total?label=Download%40v1.4.1-dev&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.4.1-dev)
[![GitHub release (by tag)](https://img.shields.io/github/downloads/Delppine1024/TyporaGreen/v1.3.0-dev/total?label=Download%40v1.3.0-dev&style=flat)](https://github.com/Delppine1024/TyporaGreen/releases/tag/v1.3.0-dev)



*We have been discovering the new techs, you can find some info below:

- [Delppine - TC](https://github.com/Delppine1024/TC)
- [Yoshino-s - TyporaCracker](https://github.com/Yoshino-s/typoraCracker)
- [Mas0nShi - typoraCracker](https://github.com/Mas0nShi/typoraCracker)

The subsequent crack files maybe change types, and be different from the current ones.



# TyporaGreen

Some crack files work well on Typora v1.1 (The latest support v1.4.8/v1.5.0-dev), Based on typoraCracker. 查看 **中文** 文档请戳 [这里](./README-CN.md).



**The latest** original Typora download link :

[Typora — Windows/Linux release channel](https://typora.io/releases/all)



## ATTENTION

**NOTE: Although TyporaGreen provide support for crack, we encourage buying license, in order to Support Genuine Software Development.**



```
FOR STUDY AND DISCUSSION ONLY, PLEASE DO NOT ENGAGE IN ANY ILLEGAL ACTS.
ANY PROBLEMS ARISING FROM THIS WILL BE BORNE BY THE USER.
```



## Usage

1. Download the file `app_asar_file_v1.x` or ` app_asar_folder_v1.x` corresponding to the Typora version and **OS-platform** from **Github releases**.

   > **Remind :** If you download the `app_asar_folder_v1.x`, you need to generate `app.asar` Manually. Since v1.5.0-dev, `app_asar_folder_v1.x` will **not be supported**.



2. Extract them from the compressed file.

3. **If you download the `app_asar_folder_v1.x`, use these commands below:**

   ```
   git clone https://github.com/Mas0nShi/typoraCracker
   git checkout {Typora_version+OS_Platform}
   python -m pip install -r ./typoraCracker/requirements.txt
   python ./typoraCracker/typora.py -u ./dec_app ./outappasar
   ```

   Then you can find `app.asar` in `./outappasar`.

   **If you download the `app_asar_file_v1.x`, skip this step.**



4. Copy the extracted file `app.asar` to `{Install_Location}/Typora/resources/app.asar` and **replace** it.

   On Linux and using default installing method, you can use the command: `sudo cp {app.asar} /usr/share/typora/resources/`.
   
   > **\*If you got extracted file `main.node` and `ex.js`, this means you have downloaded files for Arm OS. You need to copy both files to `{Install_Location}/Typora/resources/app.asar.unpacked/`. These are experimental, which means we need more feedback.  We cannot test them, cause we don’t have any Arm device.**



5. Then enjoy it.



## Support List

| Typora Version | Windows X64 | Windows X86 |   Windows Arm    | Linux X64 |    Linux Arm     | MacOS |
| :------------: | :---------: | :---------: | :--------------: | :-------: | :--------------: | :---: |
|   v1.5.1-dev   |      √      |     ---     |       ---        |    ---    |       ---        |   ×   |
|   v1.5.0-dev   |      √      |     ---     |       ---        |    ---    |       ---        |   ×   |
|     v1.4.8     |      √      |     ---     |       ---        |     √     |       ---        |   ×   |
|     v1.4.7     |      √      |     ---     |       ---        |    ---    |       ---        |  ---  |
|     v1.4.4     |      √      |      √      |        ×         |     √     |        ×         |   ×   |
|     v1.4.3     |      √      |      √      |        ×         |     √     |        ×         |   ×   |
|   v1.4.1-dev   |      √      |     ---     |       ---        |     √     |       ---        |   ×   |
|   v1.4.0-dev   |      √      |     ---     |       ---        |    ---    |       ---        |   ×   |
|     v1.3.8     |      √      |      √      |       ---        |    ---    |       ---        |  ---  |
|     v1.3.7     |      √      |      √      |       ---        |    ---    |       ---        |   ×   |
|     v1.3.6     |      √      |      √      |        ×         |     √     |        ×         |   ×   |
|   v1.3.3-dev   |      ×      |     ---     |       ---        |     ×     |       ---        |   ×   |
|   v1.3.2-dev   |      ×      |     ---     |       ---        |     ×     |       ---        |   ×   |
|   v1.3.1-dev   |      ×      |     ---     |       ---        |     ×     |       ---        |   ×   |
|   v1.3.0-dev   |      √      |     ---     |       ---        |     ×     |       ---        |   ×   |
|     v1.2.5     |      √      |      √      |       ---        |    ---    |       ---        |  ---  |
|     v1.2.4     |      √      |      √      |       ---        |     √     |       ---        |   ×   |
|     v1.2.3     |      √      |      √      | √ (experimental) |     √     | √ (experimental) |   ×   |
|   v1.2.2-dev   |      √      |     ---     |       ---        |     √     |       ---        |   ×   |
|     v1.1.5     |      √      |      ×      |       ---        |     √     |        √         |   ×   |
|     v1.1.4     |      √      |      ×      |        √         |     √     |        √         |   ×   |



## Addition

**I HOPE FOR WORLD PEACE AND END OF HUMAN SUFFERING !**

**2022.2.25**



## Logs

| Timeline   | Actions                                                      |
| ---------- | ------------------------------------------------------------ |
| 2022.12.26 | Add support for v1.5.1-dev on Windows x64                    |
| 2022.12.23 | Add support for v1.5.0-dev on Windows x64                    |
| 2022.10.7  | Add support for v1.4.8 on Windows x64, Linux x64             |
| 2022.9.30  | Add support for v1.4.7 on Windows x64                        |
| 2022.9.21  | Add support for v1.4.4 on Windows x86, Linux x64             |
| 2022.9.12  | Add support for v1.4.4 on Windows x64                        |
| 2022.9.3   | Add support for v1.4.3 on Windows x86/x64, Linux x64         |
| 2022.8.27  | Modified the project's detailed description of the ‘dev’ branch |
| 2022.8.27  | Add support for v1.4.1-dev on Windows x64 and Linux x64      |
| 2022.7.31  | Add support for v1.4.0-dev on Windows x64                    |
| 2022.6.27  | Add support for v1.3.8 on Windows x86/x64                    |
| 2022.6.24  | Add support for v1.3.7 on Windows x86/x64                    |
| 2022.6.22  | Add support for v1.2.3, v1.2.4, v1.2.5, v1.3.6 on Windows x86/x64, Linux x64 and Arm64(some parts) |
| 2022.4.15  | Add support for v1.2.5 on Windows x86/x64                    |
| 2022.4.13  | Add support for v1.2.3 on Windows/Linux Arm experimentally   |
| 2022.4.8   | Add support for v1.3.0-dev on branch ‘dev’, Readme detailed  |
| 2022.4.4   | Change readme and content statement                          |
| 2022.3.28  | Add support for v1.2.4 on all OS-Platform                    |
| 2022.3.25  | Change readme format, add more support                       |
| 2022.3.24  | Add support for v1.2.3 on Windows x64                        |
| 2022.3.21  | Add Chinese language Readme Support                          |
| 2022.3.15  | Add support for v1.2.2-dev on branch ‘dev’                   |
| 2022.3.7   | README detailed                                              |
| 2022.2.26  | 1.1.5 file size reduced                                      |
| 2022.2.25  | 1.1.4 and up cracked, upload to GitHub                       |
| 2022.2.24  | Dev version build                                            |



## LICENSE

MIT LICENSE





------

If you like this repo, you can star/fork/watch this repository.

**Plus, we always encourage buying license.**



## Who has starred

[![Stargazers repo roster for @Delppine1024/TyporaGreen](https://reporoster.com/stars/dark/Delppine1024/TyporaGreen)](https://github.com/Delppine1024/TyporaGreen/stargazers)



## Stargazers over time

[![Stargazers over time](https://starchart.cc/Delppine1024/TyporaGreen.svg)](https://starchart.cc/Delppine1024/TyporaGreen)



## Who has forked

[![Forkers repo roster for @Delppine1024/TyporaGreen](https://reporoster.com/forks/dark/Delppine1024/TyporaGreen)](https://github.com/Delppine1024/TyporaGreen/network/members)