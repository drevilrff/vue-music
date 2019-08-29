<!--
 * @Description: 歌手列表模块
 * @Author: drevilly
 * @Date: 2019-06-15 17:51:22
 * @LastEditTime: 2019-08-29 14:39:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="singer">
    <list-view :data="singers"></list-view>
  </div>
</template>

<script type="text/ecmascript-6">
import Singer from "common/js/singer";
import ListView from "base/listview/listview";
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";

const HOT_NAME = "热门";

const NOT_LENGTH = 10;

export default {
  data() {
    return {
      singers: []
    };
  },
  components: {
    ListView
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList()
        .then(res => {
          if (res.code === ERR_OK) {
            this.singers = this._normalizeSinger(res.data.list);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };

      list.forEach((item, index) => {
        if (index < NOT_LENGTH) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        }
        const key = item.Findex;

        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });
      //
      let hot = [];
      let ret = [];
      for (let key in map) {
        let value = map[key];
        if (value.title.match(/[a-zA-Z]/)) {
          ret.push(value);
        } else if (value.title === HOT_NAME) {
          hot.push(value);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return [...hot, ...ret];
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
