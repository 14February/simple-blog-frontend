<template>
    <div>
        <n-card title="管理后台登录">
            <n-form :model="admin" :rules="rules">


    <n-form-item label="账号" path="account">
      <n-input v-model:value="admin.account" placeholder="请输入账号" />
    </n-form-item>
    <n-form-item label="密码" path="password">
      <n-input v-model:value="admin.password" type="password" placeholder="请输入密码" />
    </n-form-item>
</n-form>
    <template #footer>
        <n-checkbox v-model:checked="admin.remember" label="记住我"/>
        <n-button @click="login">登录</n-button>
    </template>
  
  </n-card>
    </div>
</template>

<script setup>
import {ref, reactive, inject} from 'vue'
import {AdminStore} from '../stores/AdminStore'
import { useRoute, useRouter} from 'vue-router'
 
const axios = inject('axios')
const message = inject('message')
const adminStore = AdminStore()

const router = useRouter()
const route = useRoute()


let rules = {
    account: [
        {required: true, message: "请输入账号", trigger: "blur"},
        // trigger: "blur" 当用户在输入框中完成输入并点击或切换到其他地方（即失去焦点）时，触发表单的验证规则。
        {min: 3, max: 12, message: "账号长度在3到12之间", trigger: "blur"}
    ],
    password: [
        {required: true, message: "请输入密码", trigger: "blur"},
        {min: 6, max: 18, message: "密码长度在6到18之间", trigger: "blur"}
    ]
};

const admin = reactive({
    account: localStorage.getItem("account") || "",
    password: localStorage.getItem("password") || "",
    remember: localStorage.getItem("remember") || false
})


const login = async () => {
    // let result = await axios.post("/admin/login", {
    //     account: admin.account,
    //     password: admin.password
    // });
    // console.log(result);
    // 成功
    if (admin.remember) {
        localStorage.setItem("account", admin.account)
        localStorage.setItem("password", admin.password)
        localStorage.setItem("remember", admin.remember)
    }
    message.info("登录成功")
    // adminStore.account = admin.account;
    // adminStore.password = admin.password;
    // adminStore.token = result.token;
    router.push("/dashboard")
    // 失败
    message.error("登录失败")
}

</script>

<style lang="scss" scoped>

</style>