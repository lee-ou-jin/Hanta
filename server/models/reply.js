const db = require('../utils/database');
module.exports = class Reply {
    constructor(id, content, layer, group, post_id, user_id) {
        (this.id = id), (this.content = content), (this.layer = layer), (this.group = group), (this.post_id = post_id), (this.user_id = user_id);
    }

    // 댓글 작성 / group_id는 last_insert_id()+1로 pk값과 동일하게
    saveReply() {
        return db.execute('INSERT INTO reply (content,layer,group_id, post_id,user_id) VALUES (?,?,last_insert_id() + 1,?,?)', [this.content, this.layer, this.post_id, this.user_id]);
    }

    // 대댓글 작성
    saveReply2() {
        return db.execute('INSERT INTO reply (content,layer,group_id, post_id,user_id) VALUES (?,?,?,?,?)', [this.content, this.layer, this.group, this.post_id, this.user_id]);
    }

    // 댓글 리스트
    static replyList(post_id) {
        return db.execute('SELECT * from reply WHERE post_id = ?', [post_id]);
    }

    // 댓글 삭제 - 내용 변경으로
    static deleteReply(reply_id, post_id, user_id) {
        return db.execute('UPDATE reply SET content = "삭제된 댓글입니다." WHERE reply.id = ? AND post_id = ? AND user_id = ?', [reply_id, post_id, user_id]);
    }

    // 댓글 찾기
    static fetchOne(reply_id) {
        return db.execute('SELECT * FROM reply WHERE reply.id = ?', [reply_id]);
    }
};
