webpackJsonp([7],{MCev:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),i=a("exGp"),s=a.n(i),l={data:function(){return{tableData:[],pageList:[],total:0,pageSize:5,currentPage:1,pageSizeArr:[5,10,15]}},methods:{getAllCategories:function(){var e=this;return s()(r.a.mark(function t(){var a,n,i,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("categories");case 2:a=t.sent,n=a.data,i=n.data,200===(s=n.meta).status?(e.tableData=i,e.total=i.length,e.getPageList()):e.$message.error(s.msg);case 5:case"end":return t.stop()}},t,e)}))()},getPageList:function(){var e=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;this.pageList=this.tableData.slice(e,t)},currentChange:function(e){this.currentPage=e,this.getPageList()},sizeChange:function(e){this.pageSize=e,this.getPageList()}},created:function(){this.getAllCategories()},components:{breadNav:a("Gr30").a}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("breadNav",{attrs:{nav1:"商品管理",nav2:"商品分类"}}),e._v(" "),a("el-row",{staticClass:"addBtnRow"},[a("el-col",[a("el-button",{attrs:{type:"success",plain:""}},[e._v("添加分类")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pageList}},[a("el-table-tree-column",{attrs:{"file-icon":"icon icon-file","folder-icon":"icon icon-folder",prop:"cat_name",label:"分类名称",treeKey:"cat_id",parentKey:"cat_pid",levelKey:"cat_level"}}),e._v(" "),a("el-table-column",{attrs:{label:"级别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(0===t.row.cat_level?"一级":1===t.row.cat_level?"二级":"三级")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"cat_deleted",label:"是否有效"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cat_deleted?"无效":"有效")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",plain:"",size:"mini"}}),e._v(" "),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",plain:"",size:"mini"}})]}}])})],1),e._v(" "),a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,"page-sizes":e.pageSizeArr},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)},staticRenderFns:[]};var o=a("VU/8")(l,c,!1,function(e){a("eNnn")},"data-v-6ce52b18",null);t.default=o.exports},eNnn:function(e,t){}});
//# sourceMappingURL=7.cb1f195e9d6a9baeea57.js.map