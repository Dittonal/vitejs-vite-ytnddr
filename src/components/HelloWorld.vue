<template>
  <a-table
        :columns="columns"
        :data-source="datasource"
        rowKey="id"
        :loading="insuranLoading"
        @change="paginationChange"
        :pagination="{
          current,
          pageSize,
          total,
          showTotal: (total) => `共${total}条`,
          showQuickJumper: true,
        }"
      >
      </a-table>

</template>

<script>
import requests from '../utils/requests';
export default {
  getData() {
    request
      .get('https://my-json-server.typicode.com/Dittonal/testapi/db')
      .then((res) => {
        console.log(res.data);
      });
  },
};
</script>

<style></style>
