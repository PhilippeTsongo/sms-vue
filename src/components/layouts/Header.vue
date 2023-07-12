<template>
    <div class="header pb-3 bg-[#F5F7FB]">
      <div class="flex">
          <form action="" class="absolute">
              <input type="search" class="pl-2 p-2 rounded-md search" placeholder="recherchez...">
                <i class="fa fa-search search-icon"></i>
          </form>

          <div class="flex absolute right-5">
              <div class="bg-white mr-2 rounded-md p-1">
                    <span class="notification-icon m-2">
                      <i class="fa fa-bell"></i>
                    </span>
                    <span class="parameter-icon m-2">
                      <i class="fa fa-envelope"></i>
                    </span>
              </div>
              
              <div class="flex font-bold">
                <span class="bg-white rounded-md p-1 pl-2 pr-2"> Philippe Tsongo </span>
                <img src="../../../public/images/profiles/phil.jpeg" class="rounded-full ml-2 w-8 h-8" alt="Philippe Tsongo THKV">
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>



<style>
.header h1 {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bolder;
}

.header {
  display: flex;
  width: 100%;
}

.search {
  width: 520px;
}

.header form .search:hover {
  border-left: none;
  border-right: none;
  border-top: none;
}

.search-icon {
  position: absolute;
  margin: 11px 0px 0px -25px;
}

@media (max-width: 900px) {
  .header form {
    display: none;
  }
}
</style>