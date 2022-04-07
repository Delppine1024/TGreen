*We have been discovering the new techs, you can find some info below:

- [Mas0nShi - typoraCracker](https://github.com/Mas0nShi/typoraCracker)
- [Yoshino-s - TyporaCracker](https://github.com/Yoshino-s/TyporaCracker)

The subsequent crack files maybe change types, and be different from the current ones.



# TyporaCrack - Dev Branch

Some crack files work well on Typora v1.1 (The latest support v1.3.0-dev), Powered by typoraCracker. 查看 **中文** 文档请戳[这里](./README-CN.md).



**The latest** original Typora download link : 

[Typora — Windows/Linux release channel](https://typora.io/releases/all)
	

***This branch is dev Branch, which designed for users wanna try modern behaviors on Typora-Dev Releases.**



## ATTENTION

**NOTE: Although TyporaCrack provide support for crack, we encourage buying license, in order to Support Genuine Software Development.**



```
FOR STUDY AND DISCUSSION ONLY, PLEASE DO NOT ENGAGE IN ANY ILLEGAL ACTS.
ANY PROBLEMS ARISING FROM THIS WILL BE BORNE BY THE USER.
```



## Usage

1. Download the file `app_asar_file_v1.x` or ` app_asar_folder_v1.x` corresponding to the Typora version from **Github releases**. 

   **\*\*Remind :** If you download the `app_asar_folder_v1.x`, you need to generate `app.asar` **Manually**. 

   

2. Extract them from the compressed file.

3. **If you download the `app_asar_folder_v1.x`, use these commands below:**

   ```bash
   git clone https://github.com/Mas0nShi/typoraCracker
   git checkout {Typora_version+OS_Platform}
   python -m pip install -r ./typoraCracker/requirements.txt
   python ./typoraCracker/typora.py -u ./dec_app ./outappasar
   ```

   Then you can find `app.asar` in `./outappasar`.

   **If you download the `app_asar_file_v1.x`, skip this step.**

   

4. Copy the file `app.asar` to `{Install_Location}/Typora/resources/app.asar` and **replace** it. 

   In Linux, you can use the command: `sudo cp {app.asar} /usr/share/typora/resources/`.

2. Then enjoy it.



## Support List

| Typora Version | Windows X64 | Windows X86 | Windows Arm | Linux X64 | Linux Arm | MacOS |
| :------------: | :---------: | :---------: | :---------: | :-------: | :-------: | :---: |
|   v1.3.0-dev   |      √      |     ---     |     ---     |     √     |    ---    |  ---  |
|   v1.2.2-dev   |      √      |     ---     |     ---     |     √     |    ---    |   ×   |



## Addition

**I HOPE FOR WORLD PEACE AND END OF HUMAN SUFFERING !** 

**2022.2.25**



## Logs

| Timeline  | Actions                                   |
| --------- | ----------------------------------------- |
| 2022.4.8  | Add support for v1.3.0-dev                |
| 2022.3.21 | Add Chinese language Readme Support       |
| 2022.3.15 | Add support for 1.2.2-dev on branch ‘dev’ |
| 2022.3.7  | README detailed                           |
| 2022.2.26 | 1.1.5 file size reduced                   |
| 2022.2.25 | 1.1.4 and up cracked, upload to GitHub    |
| 2022.2.24 | Dev version build                         |



## LICENSE

MIT LICENSE





------

If you like this repo, you can star/fork/watch this repository. 

**Plus, we always encourage buying license.**



## Who has starred

[![Stargazers repo roster for @SnapdragonLee/TyporaCrack](https://reporoster.com/stars/dark/SnapdragonLee/TyporaCrack)](https://github.com/SnapdragonLee/TyporaCrack/stargazers)



## Stargazers over time

[![Stargazers over time](https://starchart.cc/SnapdragonLee/TyporaCrack.svg)](https://starchart.cc/SnapdragonLee/TyporaCrack)



## Who has forked

[![Forkers repo roster for @SnapdragonLee/TyporaCrack](https://reporoster.com/forks/dark/SnapdragonLee/TyporaCrack)](https://github.com/SnapdragonLee/TyporaCrack/network/members)
