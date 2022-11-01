<template>
  <h1>表格页</h1>
  <a-table
    :columns="columns"
    :data-source="datasource"
    rowKey="serial"
    @change="paginationChange"
    :pagination="{
      current,
      pageSize,
      total,
    }"
  >
  </a-table>
</template>

<script>
import requests from '../utils/requests';
export default {
  name: 'Table',
  mounted() {
    this.getData();
  },
  data() {
    return {
      columns: [
        {
          title: '序号',
          align: 'center',
          key: 'serial',
          slots: { customRender: 'serial' },
          customRender: function (text) {
            return text.index + 1 + (this.current - 1) * this.pageSize;
          }.bind(this),
        },
        {
          align: 'center',
          ellipsis: true,
          title: '文件名称',
          dataIndex: 'name',
          key: 'name',
        },
        {
          align: 'center',
          ellipsis: true,
          title: '价格',
          dataIndex: 'price',
          key: 'price',
        },
        {
          align: 'center',
          ellipsis: true,
          title: '上传时间',
          dataIndex: 'check',
          key: 'check',
        },
      ],
      datasource: [],
      current: 1,
      pageSize: 10,
      total: 0,
    };
  },
  methods: {
    getData() {
      request
        .get('https://my-json-server.typicode.com/Dittonal/testapi/db')
        .then((res) => {
          this.datasource = res.data['goods'];
        });
    },
    paginationChange(page) {
      this.current = page.current;
      this.pageSize = page.pageSize;
      this.getData();
    },
  },
};
</script>

<style></style>
