<template>
    <div>
        <!--Begin Header Begin-->
        <div class="soubg">
            <div class="sou">
                <!--Begin 所在收货地区 Begin-->
                <span class="s_city_b">
        	<span class="fl">送货至：</span>
            <span class="s_city">
            	<span>四川</span>
                <div class="s_city_bg">
                	<div class="s_city_t"></div>
                    <div class="s_city_c">
                    	<h2>请选择所在的收货地区</h2>
                    </div>
                </div>
            </span>
        </span>
                <!--End 所在收货地区 End-->
                <span class="fr">
        	<span class="fl"><a href="Login.html">用户：{{name}}</a>&nbsp; <a href="Regist.html" style="color:#ff4e00;">免费注册</a>&nbsp;|&nbsp;<a href="#">我的订单</a>&nbsp;|</span>
        	<span class="ss">
            	<div class="ss_list">
                	<a href="#">收藏夹</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">我的收藏夹</a></li>
                                <li><a href="#">我的收藏夹</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ss_list">
                	<a href="#">客户服务</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                                <li><a href="#">客户服务</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ss_list">
                	<a href="#">网站导航</a>
                    <div class="ss_list_bg">
                    	<div class="s_city_t"></div>
                        <div class="ss_list_c">
                        	<ul>
                            	<li><a href="#">网站导航</a></li>
                                <li><a href="#">网站导航</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </span>
            <span class="fl">|&nbsp;关注我们：</span>
            <span class="s_sh"><a href="#" class="sh1">新浪</a><a href="#" class="sh2">微信</a></span>
            <span class="fr">|&nbsp;<a href="#">手机版&nbsp;<img src="../assets/images/s_tel.png" align="absmiddle" /></a></span>
        </span>
            </div>
        </div>
        <div class="top">
            <div class="logo"><a href="Index.html"><img src="../assets/images/logo.png" /></a></div>
            <div class="search">
                <form>
                    <input type="text" value="" class="s_ipt" />
                    <input type="submit" value="搜索" class="s_btn" />
                </form>
                <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
            </div>
            <div class="i_car">
                <div class="car_t">购物车 [ <span>3</span> ]</div>
                <div class="car_bg">
                    <!--Begin 购物车未登录 Begin-->
                    <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
                    <!--End 购物车未登录 End-->
                    <!--Begin 购物车已登录 Begin-->
                    <ul class="cars">
                        <li>
                            <div class="img"><a href="#"><img src="../assets/images/car1.jpg" width="58" height="58" /></a></div>
                            <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
                            <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                        </li>
                        <li>
                            <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
                            <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                            <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                        </li>
                        <li>
                            <div class="img"><a href="#"><img src="../assets/images/car2.jpg" width="58" height="58" /></a></div>
                            <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
                            <div class="price"><font color="#ff4e00">￥399</font> X1</div>
                        </li>
                    </ul>
                    <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
                    <div class="price_a"><a href="#">去购物车结算</a></div>
                    <!--End 购物车已登录 End-->
                </div>
            </div>
        </div>
        <!--End Header End-->
        <!--Begin Menu Begin-->
        <div class="menu_bg">
            <div class="menu">
                <!--Begin 商品分类详情 Begin-->
                <div class="nav">
                    <div class="nav_t">全部商品分类</div>
                    <div class="leftNav none">

                    </div>
                </div>
                <!--End 商品分类详情 End-->
                <ul class="menu_r">
                    <li><a href="Index.html">首页</a></li>
                    <li><a href="Food.html">美食</a></li>
                    <li><a href="Fresh.html">生鲜</a></li>
                    <li><a href="HomeDecoration.html">家居</a></li>
                    <li><a href="SuitDress.html">女装</a></li>
                    <li><a href="MakeUp.html">美妆</a></li>
                    <li><a href="Digital.html">数码</a></li>
                    <li><a href="GroupBuying.html">团购</a></li>
                </ul>
                <div class="m_ad">中秋送好礼！</div>
            </div>
        </div>
        <!--End Menu End-->
        <div class="i_bg">
            <div class="content mar_20">
                <img src="../assets/images/img1.jpg" />
            </div>

            <!--Begin 第一步：查看购物车 Begin -->
            <div class="content mar_20">
                <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="car_th" width="490">商品名称</td>
                        <td class="car_th" width="140">属性</td>
                        <td class="car_th" width="150">购买数量</td>
                        <td class="car_th" width="130">小计</td>
                        <td class="car_th" width="140">返还积分</td>
                        <td class="car_th" width="150">操作</td>
                    </tr>
                    <tr v-for="buycar in arr">
                        <td>
                            <input type="checkbox" name="clear" v-on:click="check(buycar)" v-bind:value="buycar.goods_id"  /><div class="c_s_img"><img src="../assets/images/c_1.jpg" width="73" height="73" /></div>
                            {{buycar.name}}
                        </td>
                        <td align="center">属性:{{buycar.attr_name}}</td>
                        <td align="center">
                            <div class="c_num" >
                                <input type="button" value="" v-on:click="Update(buycar.newber -=1,buycar.shop_id,buycar);" class="car_btn_1" />
                                <input type="text" v-bind:value="buycar.newber" name="" class="car_ipt"/>
                                <input type="button" value="" v-on:click="Update(buycar.newber +=1,buycar.shop_id,buycar);" class="car_btn_2" />
                            </div>
                        </td>
                        <td align="center" style="font-size:15px;color:blue;"><b>￥{{buycar.price}}</b></td>
                        <td align="center">26R</td>
                        <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">总价</a></td>
                    </tr>

                    <tr height="70">
                        <td colspan="6" style="font-family:'Microsoft YaHei'; border-bottom:0;">
                            <label class="r_rad"><input type="checkbox" name="clear" /></label><label class="r_txt">清空购物车</label>
                            <span class="fr">商品总价：<b style="font-size:22px; color:#ff4e00;">{{totalp}}</b></span>
                        </td>
                    </tr>
                    <tr valign="top" height="150">
                        <td colspan="6" align="right">

                            <a href="#"><img src="../assets/images/buy1.gif" /></a>&nbsp; &nbsp; <a href="#"><button v-on:click="buycar()">确认结算</button></a>
                        </td>
                    </tr>
                </table>

            </div>
            <!--End 第一步：查看购物车 End-->


            <!--Begin 弹出层-删除商品 Begin-->
            <div id="fade" class="black_overlay"></div>
            <div id="MyDiv" class="white_content">
                <div class="white_d">
                    <div class="notice_t">
                        <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="../assets/images/close.gif" /></span>
                    </div>
                    <div class="notice_c">

                        <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
                            <tr valign="top">
                                <td>您确定要把该商品移除购物车吗？</td>
                            </tr>
                            <tr height="50" valign="bottom">
                                <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            <!--End 弹出层-删除商品 End-->


            <!--Begin Footer Begin -->
            <div class="b_btm_bg bg_color">
                <div class="b_btm">
                    <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="72"><img src="../assets/images/b1.png" width="62" height="62" /></td>
                            <td><h2>正品保障</h2>正品行货  放心购买</td>
                        </tr>
                    </table>
                    <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="72"><img src="../assets/images/b2.png" width="62" height="62" /></td>
                            <td><h2>满38包邮</h2>满38包邮 免运费</td>
                        </tr>
                    </table>
                    <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="72"><img src="../assets/images/b3.png" width="62" height="62" /></td>
                            <td><h2>天天低价</h2>天天低价 畅选无忧</td>
                        </tr>
                    </table>
                    <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="72"><img src="../assets/images/b4.png" width="62" height="62" /></td>
                            <td><h2>准时送达</h2>收货时间由你做主</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="b_nav">
                <dl>
                    <dt><a href="#">新手上路</a></dt>
                    <dd><a href="#">售后流程</a></dd>
                    <dd><a href="#">购物流程</a></dd>
                    <dd><a href="#">订购方式</a></dd>
                    <dd><a href="#">隐私声明</a></dd>
                    <dd><a href="#">推荐分享说明</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">配送与支付</a></dt>
                    <dd><a href="#">货到付款区域</a></dd>
                    <dd><a href="#">配送支付查询</a></dd>
                    <dd><a href="#">支付方式说明</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">会员中心</a></dt>
                    <dd><a href="#">资金管理</a></dd>
                    <dd><a href="#">我的收藏</a></dd>
                    <dd><a href="#">我的订单</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">服务保证</a></dt>
                    <dd><a href="#">退换货原则</a></dd>
                    <dd><a href="#">售后服务保证</a></dd>
                    <dd><a href="#">产品质量保证</a></dd>
                </dl>
                <dl>
                    <dt><a href="#">联系我们</a></dt>
                    <dd><a href="#">网站故障报告</a></dd>
                    <dd><a href="#">购物咨询</a></dd>
                    <dd><a href="#">投诉与建议</a></dd>
                </dl>
                <div class="b_tel_bg">
                    <a href="#" class="b_sh1">新浪微博</a>
                    <a href="#" class="b_sh2">腾讯微博</a>
                    <p>
                        服务热线：<br />
                        <span>400-123-4567</span>
                    </p>
                </div>
                <div class="b_er">
                    <div class="b_er_c"><img src="../assets/images/er.gif" width="118" height="118" /></div>
                    <img src="../assets/images/ss.png" />
                </div>
            </div>
            <div class="btmbg">
                <div class="btm">
                    备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
                    <img src="../assets/images/b_1.gif" width="98" height="33" /><img src="../assets/images/b_2.gif" width="98" height="33" /><img src="../assets/images/b_3.gif" width="98" height="33" /><img src="../assets/images/b_4.gif" width="98" height="33" /><img src="../assets/images/b_5.gif" width="98" height="33" /><img src="../assets/images/b_6.gif" width="98" height="33" />
                </div>
            </div>
            <!--End Footer End -->
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                //商品
                arr:'',
                id:'',
                name:localStorage.getItem("name"),
                jian:'',
                shop:[],
                totalp:'',
                nerder:''
            }
        },
        mounted(){
            var _this=this
            axios.post(this.url+"auth/buycar_show",{

                token: localStorage.getItem("token")})
                .then(response => (
                        console.log(response.data.data.data),
                        _this.arr = response.data.data.data
                ))
                .catch(function (error) {
                    console.log(error);
                });

        },
        methods : {
            Update(a,e,c) {
                //发送请求
                console.log(a,e)
                console.log(c)
                var _this=this
                axios.post(this.url+"auth/Up", {
                    arr:e,
                    arr1:a,
                    token: localStorage.getItem("token")
                })
                    .then(response => (
                        _this.jian = response.data
                ))
            },
            check(cat){
                var arr=cat.goods_id;
                console.log(arr);
                console.log(cat);
                if (this.shop[arr]==undefined || this.shop[arr]==''){
                    this.shop[arr]=cat
                } else {
                    this.shop[arr]=''
                }
                console.log(this.shop)
                var totalp=0
                this.shop.forEach(function (val) {
                    if (val!=''){
                        totalp+=val.newber * val.price
                    }
                })
                console.log(totalp)
                this.totalp=totalp
                localStorage.setItem("buycar_id", this.shop);
            },
            buycar(){
                var city=$("input[type='checkbox']:checked")
                var nerder=''
                for (var i=0; i<city.length;i++){
                    nerder=nerder+"-"+city[i].value
                }
                this.nerder=nerder
                localStorage.setItem("buycar_id",this.nerder);
                this.$router.push({path:'/buycar_two'})
            }

        }
    }
</script>
<style>
    @import "../assets/css/style.css";
</style>