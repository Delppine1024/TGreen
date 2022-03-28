# TyporaCrack

基于 typoraCracker 技术支持产生的用于破解 Typora v1.1 (最新支持 v1.2.4) 版本及以上的一些文件。View the **English** version of Readme, please click [here](./README.md).



**最新** 的 Typora 源程序下载链接：

[Typora — Windows/Linux release channel](https://typora.io/releases/all)

https://typora.io/windows/typora-setup-x64.exe



***对于那些想要尝试开发功能、体验提前升级的 Typora-dev 测试版本的用户们，破解文件已经被发布在了新的分支上，您可以在新的 `dev` 分支查看并尝试它们。**



## 注意

**重要: 尽管 TyporaCrack 提供破解支持，我们依然鼓励购买激活，目的是为了支持正版软件开发。**



```
该仓库发布的任何内容仅供学习讨论，请勿从事任何违法行为。
由此仓库发布的任何内容对用户的计算机产生的任何问题将由用户负责。

根据二〇〇二年一月一日《计算机软件保护条例》规定：
第十七条　为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬。
```



## 使用方法

1. 从 **Github Releases** 中下载与 Typora 的安装版本和 **系统版本** 相符的文件 `app_asar_file_v1.x` 或者 ` app_asar_folder_v1.x` 。

   **\*\*注意:** 如果您下载的是 `app_asar_folder_v1.x`，您需要 **手动** 生成 `app.asar` 文件。

   

2. 将压缩文件解压。

3. **如果您下载了 `app_asar_folder_v1.x`, 您需要用到下面的这些指令:**

   ```
   git clone https://github.com/Mas0nShi/typoraCracker
   git checkout {Typora_version+OS_Platform}
   python ./typoraCracker/typora.py -u ./dec_app ./outappasar
   ```

   之后，您就可以在 `./outappasar` 中找到 `app.asar`。

   **如果您下载的是 `app_asar_file_v1.x`，您可以跳过此步骤。**

   

4. 复制得到的 `app.asar` ，拷贝并 **替换** `{Install_Location}/Typora/resources/app.asar` 。`Install_Location` 指的是 Typora 的安装目录。

   在 Linux 系统并使用默认安装目录的，您可以使用该指令： `sudo cp {app.asar} /usr/share/typora/resources/` 。

5. 完成。

   

## 支持列表

| Typora 版本 | Windows 64位 | Windows 32位 | Linux 64位 |
| :---------: | :----------: | :----------: | :--------: |
|   v1.2.4    |      √       |      √       |     √      |
|   v1.2.3    |      √       |      √       |     √      |
|   v1.1.5    |      √       |      ×       |     √      |
|   v1.1.4    |      √       |      ×       |     √      |



## 附加

**我希望世界和平，且人类不要再遭受苦难！** 

**2022.2.25**



## 修改日志

| Timeline  | Actions                                    |
| --------- | ------------------------------------------ |
| 2022.3.28 | 增加了对 所有操作系统 1.2.4 版本的支持     |
| 2022.3.25 | 更改了 Readme 格式，增加了更多平台支持     |
| 2022.3.24 | 增加了对 windows 64位系统 1.2.3 版本的支持 |
| 2022.3.21 | 增加了中文语言文档的支持                   |
| 2022.3.15 | Add support for v1.2.2-dev in branch ‘dev’ |
| 2022.3.7  | README detailed                            |
| 2022.2.26 | 1.1.5 file size reduced                    |
| 2022.2.25 | 1.1.4 and up cracked, upload to GitHub     |
| 2022.2.24 | Dev version build                          |



## 许可证

MIT 许可证





------

如果您喜欢本仓库，您可以 star/fork/watch 本仓库。 

**重申，我们永远鼓励购买激活。**



## 已经 star 本仓库的用户

[![Stargazers repo roster for @SnapdragonLee/TyporaCrack](https://reporoster.com/stars/dark/SnapdragonLee/TyporaCrack)](https://github.com/SnapdragonLee/TyporaCrack/stargazers)



## 已经 fork 本仓库的用户

[![Forkers repo roster for @SnapdragonLee/TyporaCrack](https://reporoster.com/forks/dark/SnapdragonLee/TyporaCrack)](https://github.com/SnapdragonLee/TyporaCrack/network/members)
