<template>
    <div>
        <el-card class="box-card" v-loading="loading">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/form' }">编辑器</el-breadcrumb-item>
            </el-breadcrumb>
            <el-divider></el-divider>

          <el-row>
            <el-col :lg="12">
              <el-tiptap
                v-model="content"
                :extensions="extensions"
                lang="zh"
              />
            </el-col>
            
          </el-row>
         
        </el-card>

        
    </div>
</template>
<script>
import 'element-tiptap/lib/index.css';
import { ElementTiptap,Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  Image,
  CodeBlock,
  FontType,
  Indent
  
  } from 'element-tiptap';
  export default {
    components: {
    'el-tiptap': ElementTiptap
  },
    data() {
      return {
        loading:true,
        content:'',
        extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({ bubble: true, menubar: false }),
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Image(),
        new CodeBlock(),
        new FontType(),
        new Indent()
      ],
      }
    },
    created(){
        setTimeout(()=>{
            this.loading = false
        },500)
    },
    
  }
</script>