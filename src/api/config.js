/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 13:38:20
 * @LastEditTime: 2019-08-29 10:25:29
 * @LastEditors: Please set LastEditors
 */

/**
 * @description: 获取qq音乐数据通用参数
 * @param {type} 
 * @return: 
 */
export const commonParams = {
  g_tk: 5831,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

/**
 * @description: 获取qq音乐轮播数据回调函数方法名
 * @param {type} 
 * @return: 
 */
export const options = {
  param: 'jsonpCallback'
}

/**
 * @description: 错误码
 * @param {type} 
 * @return: 
 */
export const ERR_OK = 0

export const STATUS_OK = 200

/**
 * @description: 获取推荐歌单data属性数据
 * @param {type} 
 * @return: 
 */
export const paramsRecomment = { "comm": { "ct": 24 }, "category": { "method": "get_hot_category", "param": { "qq": "" }, "module": "music.web_category_svr" }, "recomPlaylist": { "method": "get_hot_recommend", "param": { "async": 1, "cmd": 2 }, "module": "playlist.HotRecommendServer" }, "playlist": { "method": "get_playlist_by_category", "param": { "id": 8, "curPage": 1, "size": 40, "order": 5, "titleid": 8 }, "module": "playlist.PlayListPlazaServer" }, "new_song": { "module": "newsong.NewSongServer", "method": "get_new_song_info", "param": { "type": 5 } }, "new_album": { "module": "newalbum.NewAlbumServer", "method": "get_new_album_info", "param": { "area": 1, "sin": 0, "num": 10 } }, "new_album_tag": { "module": "newalbum.NewAlbumServer", "method": "get_new_album_area", "param": {} }, "toplist": { "module": "musicToplist.ToplistInfoServer", "method": "GetAll", "param": {} }, "focus": { "module": "QQMusic.MusichallServer", "method": "GetFocus", "param": {} } }

/**
 * @description: 获取歌手页面data属性数据
 * @param {type} 
 * @return: 
 */
export const paramsSinger = {"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}