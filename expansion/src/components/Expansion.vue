<template>
  <div class="expand_demo">
    <el-table :data="tableData"
              @expand-change="expandChange"
              :row-key="getRowKeys"
              :expand-row-keys="expands"
              style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left"
                   inline
                   class="demo-table-expand">
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品 ID"
                       prop="id">
      </el-table-column>
      <el-table-column label="商品名称"
                       prop="name">
      </el-table-column>
      <el-table-column label="描述"
                       prop="desc">
      </el-table-column>
    </el-table>

    <!-- 增加一键展开/折叠 箭头 -->
    <div id="expand-all"
         class="el-table__expand-column"
         @click="expandAll">

      <div class="cell">
        <div id="expand-arrow-box"
             class="el-table__expand-icon">
          <i id="expand-arrow"
             class="el-icon el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],
      expands: [],
      getRowKeys: function(row) {
        return row.id;
      }
    };
  },
  methods: {
    expandAll() {
      const _this = this;
      if ($("#expand-arrow-box").hasClass("el-table__expand-icon--expanded")) {
        $("#expand-arrow-box").removeClass("el-table__expand-icon--expanded");
        _this.toggleExpanded(false);
      } else {
        $("#expand-arrow-box").addClass("el-table__expand-icon--expanded");
        _this.toggleExpanded(_this.tableData);
      }
    },

    /**
     *
     *
     *
     */
    
    expandChange(row, expandedRows) {
      const _this = this;

      if (expandedRows.indexOf(row) !== -1) {
        if (_this.expands.indexOf(row.id) == -1) {
          _this.expands.push(row.id);

          // 如果所有行都展开，则arrow旋转
          if (_this.expands.length == _this.tableData.length) {
            $("#expand-arrow-box").addClass("el-table__expand-icon--expanded");
          }
        } else {
          // 如果折叠行，则从_this.expands数组中删除行id
          let index = _this.expands.indexOf(row.id);
          _this.expands.splice(index, 1);

          // 如果expands为空，说明全部折叠，则收起arrow
          if (_this.expands.length == 0) {
            $("#expand-arrow-box").removeClass(
              "el-table__expand-icon--expanded"
            );
          }
        }
      }
    },

    toggleExpanded(rows) {
      const _this = this;
      if (rows) {
        rows.forEach(row => {
          if (_this.expands.indexOf(row.id) == -1) {
            _this.expands.push(row.id);
          }
        });
      } else {
        $("#expand-arrow-box").removeClass("el-table__expand-icon--expanded");
        _this.expands = [];
      }
    }
  }
};
</script>
<style lang="scss">
.expand_demo {
  .demo-table-expand {
    font-size: 0;

    label {
      width: 90px;
      color: #99a9bf;
    }

    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
  #expand-all {
    width: 46px;
    height: 39px;
    position: absolute;
    top: 63px;
    left: 8px;

    .cell {
      width: 47px;
      height: 20px;
      text-align: center;

      .el-table__expand-icon {
        width: 27px;
        height: 20px;
        margin: 10px auto;
      }
    }
  }
}
</style>