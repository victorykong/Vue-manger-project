webpackJsonp([6],{IgrI:function(e,t){},PXOj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),l=a("exGp"),o=a.n(l),r={data:function(){return{tableData:[],query:"",pagenum:1,pagesize:10,total:0,pagesizes:[10,20,30]}},methods:{getAllGoodsData:function(){var e=this;return o()(s.a.mark(function t(){var a,n,l,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods?query="+e.query+"&pagenum="+e.pagenum+"&pagesize="+e.pagesize);case 2:a=t.sent,n=a.data,l=n.data,200===(o=n.meta).status?(e.tableData=l.goods,e.total=l.total):e.$message.error(o.msg);case 5:case"end":return t.stop()}},t,e)}))()},handleCurrentChange:function(e){this.pagenum=e,this.getAllGoodsData()},handleSizeChange:function(e){this.pagesize=e,this.getAllGoodsData()},search:function(){this.getAllGoodsData()},toAddPage:function(){this.$router.push("/goods/add")}},created:function(){this.getAllGoodsData()},components:{breadNav:a("Gr30").a}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("breadNav",{attrs:{nav1:"商品管理",nav2:"商品列表"}}),e._v(" "),a("el-row",{staticClass:"searchAddRow"},[a("el-col",{attrs:{span:6}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),e._v(" "),a("el-col",{attrs:{span:18}},[a("el-button",{staticClass:"addBtn",attrs:{type:"success",plain:""},on:{click:e.toAddPage}},[e._v("添加商品")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{type:"index"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"400"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goods_price",label:"商品价格（元）"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"add_time",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("MomentFilter")(t.row.add_time,"YYYY-MM-DD hh:mm:ss"))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",plain:"",size:"mini"}}),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",plain:"",size:"mini"}})]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pagenum,"page-sizes":e.pagesizes,"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var c=a("VU/8")(r,i,!1,function(e){a("IgrI")},"data-v-7897756e",null);t.default=c.exports}});
//# sourceMappingURL=6.f6facbf187bac5e67028.js.map