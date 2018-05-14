<template>
    <!--个人中心组件-->
    <div id="classes">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> {{$store.state.user.extra.grade}}年级{{$store.state.user.extra.clazz}}班 </span>
            </div>
        </header>
        <div class="header_info">
            <div class="user_bg">
                <img class="userImg" :src="$store.state.info.userImg">
            </div>
            <div class="detail">
                <div>体力：<span>{{$store.state.user.extra.phy}}</span></div>
                <div>经验值：<span>{{$store.state.user.extra.exp}}</span></div>
                <div>等级：<span>{{$store.state.user.extra.level}}</span></div>
                <div>能力值：<span>{{$store.state.user.extra.cap}}</span></div>
            </div>
        </div>
        <div class="classes_btns">
            <div class="leftBtn">督促</div>
            <div class="rightBtn">动态</div>
        </div>
        <div class="classes_block">
            <div class="tables" :refreshNum="refreshNum">
                <div class="row" v-for="(rows,index) in tables" :pos="index">
                    <div v-for="(item,index) in rows" :class="{table:true,end:item.end,male:item.male,female:item.female,male2:item.male2,female2:item.female2,me:item.isMe}" @click.prevent="selectSite(index,$event)">
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="table_teacher">
                    <div class="BanZhuRen"></div>
                    <div class="JZ"></div>
                    <div class="JiQi" @click.prevent="showJob()"></div>
            </div>
        </div>
        <footer class="app-footer">
            <nav class="classes_footer">
                <div>
                    <div class="btn TX"><router-link to="/classes/student" tag="p"></router-link></div>
                </div><div>
                <div class="btn XGRW"><router-link to="/classes/habit" tag="p"></router-link></div>
            </div><div>
                <div class="btn JL"><router-link to="/home/award/index" tag="p"></router-link></div>
            </div><div>
                <div class="btn LYJ"><router-link to="/classes/explore/moments" tag="p"></router-link></div>
            </div>
            </nav>
        </footer>
        <div id="alertShadow" v-show="isShadow">
            <div class="alert">
                <div class="alert_header">今日上班任务 <icon @click="hideShadow()"/> </div>
                <ul class="dialog_bd">
                    <li v-for="(val,key) in tasks" :class="{over:val}">
                        <div class="task_detail">{{key}}</div>
                        <div class="btn"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                isShadow:false,
                "pageName": "X年X班",
                refreshNum:0,
                 tables:[Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6})],
                 tasks:{"XXX":false,"XXXXXXX":false,"www":true}
                }
        },
        beforeMount(){
            this.tables.forEach((row)=>{
                row.forEach && row.forEach((e,index)=>{
                    row[index] = {
                        end:(Math.ceil(index/2)-parseInt(index/2))>0,
                        table:true,
                        male2:false,
                        female2:false,
                        male:false,
                        female:false
                    };
                })
            });
            this.post2('api/list_my_clazz_users',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                this.$store.commit('setClazz', result.data)
                this.refreshList();
            });
        },
        mounted(){
        },
        activated() {
            if(this.myIdx === 0)
                this.alertText(`我是${this.$store.state.user.extra.grade}年级${this.$store.state.user.extra.clazz}班班主任，欢迎您 加入本班，请先选择你喜欢的座位， 一旦选定座位就不能再改了。`);
            else {
                this.post2('api/list_my_clazz_users',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                    this.$store.commit('setClazz', result.data)
                    this.refreshList();
                })
            }
        },
        methods:{
            charge(){
                this.$router.push({path:"/money/stamina"});
            },
            refreshList(){
                let classList = this.$store.state.clazz;
                classList = classList.filter((stu)=>{
                    return stu.idx!==0;
                });
                this.refreshNum++;
                this.tables.forEach((row)=>{
                    row.forEach && row.forEach((e,index)=>{
                        row[index] = {
                            end:(Math.ceil(index/2)-parseInt(index/2))>0,
                            table:true,
                            male2:false,
                            female2:false,
                            male:false,
                            female:false
                        };
                    })
                });
                classList.forEach((stu)=>{
                    let row,pos;
                    row = parseInt((stu.idx-1)/6);
                    pos = (stu.idx-1) - 6*row;
                    if(stu.role!==undefined &&stu.role!==0){
                        this.tables[row][pos][stu.sex==1?"male2":"female2"]=true;
                    }else {
                        this.tables[row][pos][stu.sex==1?"male":"female"]=true;
                    }
                    if(this.$store.state.user.extra.id == stu.id){
                        this.tables[row][pos].isMe = true;
                    }
                })
            },
            hideShadow(){
                this.isShadow = false;
            },
            showJob(){
                this.isShadow = true;
            },
            selectSite(index,event){
                let row=~~event.target.parentElement.getAttribute("pos"),idx = row*6+index+1,pos = index,stu = this.user;
                if(this.myIdx === 0){
                    this.post1('api/set_user_idx',{idx,access_token:this.access_token},"选定座位",()=>{
                        this.$store.commit('updateExtra', {idx});
                        if(stu.role!==undefined &&stu.role!==0){
                            this.tables[row][pos][stu.sex==1?"male2":"female2"]=true;
                        }else {
                            this.tables[row][pos][stu.sex==1?"male":"female"]=true;
                        }
                        if(this.$store.state.user.extra.id == stu.id){
                            this.tables[row][pos].isMe = true;
                        }
                        this.refreshNum++;
                    })
                }else {
                    this.alertText("你已设置座位，不能在设置！")
                }
            }
        },
        computed:{
            myIdx(){
                return this.$store.state.user.extra.idx;
            }
        }
    }
</script>
