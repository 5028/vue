<template>
    <div>
        <div class="soubg">
            <div class="sou">
        <span class="fr">
        	<span class="fl">你好，请<a href="Login.html">登录</a><a href="Regist.html" style="color:#ff4e00;">免费注册</a></span>
            <span class="fl">|关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="../assets/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
            </div>
        </div>
        <!--End Header End-->
        <!--Begin Login Begin-->
        <div class="log_bg">
            <div class="top">
                <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
            </div>
            <div class="login">
                <div class="log_img"><img src="../assets/images/l_img.png" width="611" height="425" /></div>
                <div class="log_c">
                    <form>
                        <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
                            <tr height="50" valign="top">
                                <td width="55">&nbsp;</td>
                                <td>
                                    <span class="fl" style="font-size:24px;">登录</span>
                                    <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                                </td>
                            </tr>
                            <tr height="70">
                                <td>用户名</td>
                                <td><input type="text" v-model="username" value="111" class="l_user" /></td>
                            </tr>
                            <tr height="70">
                                <td>密&nbsp; &nbsp; 码</td>
                                <td><input type="password" v-model="password" value="" class="l_pwd" /></td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                                    <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                                </td>
                            </tr>
                            <tr height="60">
                                <td>&nbsp;</td>
                                <td><input type="submit" value="登录" @click="login()" class="log_btn" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
        <!--End Login End-->
        <!--Begin Footer Begin-->
        <div class="btmbg">
            <div class="btm">
                备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
                <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
            </div>
        </div>
        <!--End Footer End -->
    </div>

</template>
<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                id:'',
                username:'',
                password:''
            }
        },
        methods : {
            login () {
                console.log(this.username)
                if (this.username == '') {
                    alert('用户名不能为空')
                    return false
                }
                if (this.password == '') {
                    alert('密码不能为空')
                    return false
                }
                //发送请求
                axios.post(this.url+"auth/login",{
                    name: this.username,
                    password: this.password
                })
                //这边是返回结果
                    .then(res => {
                        console.log(res)
                        if (res.data.token_type=='error') {
                            alert('账号密码错误')
                        }else{
                            // localStorage.setItem("lastname", res.data.access_token );
                            this.$router.push({name: 'Index'});
                            localStorage.setItem("name", this.username);
                            localStorage.setItem("token", res.data.access_token);
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>
<style>
    @import "../assets/css/style.css";
</style>
