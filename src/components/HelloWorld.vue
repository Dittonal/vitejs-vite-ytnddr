<template>


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
