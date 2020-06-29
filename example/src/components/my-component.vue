<template>
  <div class="grid">
    <h1>V-Tour</h1>
    <pre><code>my codes</code></pre>
    <div class="item-1" style="left:10%;top:100%">{{ array[0] }}</div>
    <div class="item-2" style="left:-70%;top:200%">{{ array[1] }}</div>
    <div id="item-3" style="left:100%;top:300%">{{ array[2] }}</div>
    <div id="item-4" style="left:-20%;top:400%">{{ array[3] }}</div>
    <div class="item-5" style="left:80%;top:500%">{{ array[4] }}</div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      array: [
        `<div class="item-1">item 1</div>`,
        `<div class="item-2">item 2</div>`,
        `<div id="item-3">item 3</div>`,
        `<div id="item-4">item 4</div>`,
        `<div class="item-5">item 5</div>`,
      ],
    };
  },
  created() {
    this.$tour({ name: 5 });
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}

pre {
  background-color: black;
  border-radius: 0.5rem;

  code {
    color: white;
  }
}

.grid {
  position: relative;

  div {
    background-color: white;
    width: max-content;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    box-shadow: 0 5px 15px 0 #00000030;
    position: absolute;
  }
}
</style>
