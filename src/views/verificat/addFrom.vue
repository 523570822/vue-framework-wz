<template>
    <Modal 	  v-model="todo.modal12"   mask-closable="false" :mask-closable="false"  :title="todo.titleN">
        <!--<div>{{id}}</div>-->
        <Form ref="addFromSub" :model="todo.formItem" :label-width="80"  :rules="ruleInline">
            <FormItem   label="id" hidden="true">
                <Input  v-model="todo.formItem.id" placeholder="id" ></Input>
            </FormItem>
            <FormItem label="名称" prop="name">
                <Input v-model="todo.formItem.name" placeholder="使用者名称"></Input>
            </FormItem>
            <FormItem label="类别">
                <Select v-model="todo.formItem.level"  style="width:200px">
                    <Option :value="1" :key="1">一级邀请码</Option>
                    <Option :value="2" :key="2">二级邀请码</Option>
                    <Option :value="3" :key="3">三级邀请码</Option>
                    <Option :value="4" :key="4">四级邀请码</Option>
                    <Option :value="5" :key="5">五级邀请码</Option>
                    <Option :value="6" :key="6">六级邀请码</Option>
                    <Option :value="7" :key="7">七级邀请码</Option>
                    <Option :value="8" :key="8">八级邀请码</Option>
                    <Option :value="9" :key="9">九级邀请码</Option>
                    <Option :value="10" :key="10">十级邀请码</Option>
                </Select>
            </FormItem>
           <FormItem label="是否开启">
                <i-switch    v-model="todo.formItem.switch" true-value=1 false-value=0 size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem label="验证码"  >
                <Input-number   v-model="todo.formItem.verificationCode" ></Input-number>
            </FormItem>
            <FormItem label="开始时间">
                <Date-picker v-model="todo.formItem.beginDate"  type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker>
            </FormItem>
            <!--<FormItem label="结束时间">
                <Date-picker v-model="todo.formItem.endDate" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）" style="width: 200px"></Date-picker>

            </FormItem>-->

            <FormItem label="说明">
                <Input v-model="todo.formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="简单说明以区分..."></Input>
            </FormItem>

            <FormItem>
                <Button type="primary"  @click="handleSubmit()"> 提交</Button>
                <Button style="margin-left: 8px"  @click="cancel()" >取消</Button>
            </FormItem>
        </Form>
     <div slot="footer">
           <!-- <Button type="submit" size="large"  > 提交</Button>   <Button type="dashed" size="large"  @click="cancel"> 取消</Button>-->
        </div>
    </Modal>
</template>

<script>
    export default {
      name: "add-from",
      props: ['todo'],
      components: {

      },
      data: function () {
        return {
          id: '',

          //   titleN: "默认"
          ruleInline: {
            name: [
              { required: true, message: '请填写标题', trigger: 'blur' },

            ],
            verificationCode: [
            /*  { required: true, message: '请填写权重', trigger: 'blur' },*/
              { required: true, message: '不能为空', trigger: 'blur' },

            ]
          },
        }
      },

      methods: {
        handleSubmit () {
          console.info('f到了');
          this.loading = true;
          //    console.info(this.$refs.uploadFile.imageList);
          console.info(this.todo.formItem);
          console.info(this.todo.formItem.beginDate.length);
          let ss = this.common.formatDate(this.todo.formItem.beginDate, "yyyy-MM-dd hh:mm:ss");
          console.info(ss);
          this.$refs.addFromSub.validate(valid => {
            if (valid) {
              let data = {
                create: ss,
                formItem: this.todo.formItem
              };

              this.$store.dispatch('AddVerication', data).then((response) => {
                console.info("成功回调");
                if(response.data.code == 0) {
                  console.info(response.data);
                  this.$Message.error('提交失败');
                  this.todo.modal12 = true;
                  // this.data1 = response;
                  this.$emit('refreshFrom');
                  this.loading = false

                  //  this.$router.push({ path: '/' });
                }else{
                  console.info(response.data);
                  this.$Message.success('提交成功');
                  this.todo.modal12 = false;
                  // this.data1 = response;
                  this.$emit('refreshFrom');
                  this.loading = false
                }
              }).catch(err => {
                console.info(err)
                this.$message.error(err);
                this.loading = false;
              });
            } else {
              this.$Message.success('验证失败');
              //   console.log('error submit!!');
              return false;
            }
          });
        },
        cancel () {
          console.info('取消');
          this.todo.modal12 = false;
        }
      }
      // props: ['titleN']
    }
</script>

<style scoped>

</style>
