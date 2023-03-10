import React, { Suspense, useState } from "react";
import List from "../home/Components/list";
import "../css/write.css";
import Modaly from "./modaly";
import { Link } from "react-router-dom";

function fetchPost1() {
    let post;
    const suspender = fetch("http://localhost:8080/api/mypage/posts", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            post = data;
        });
    return {
        read() {
            if (!post) {
                throw suspender;
            } else {
                return post;
            }
        },
    };
}

function fetchPost2() {
    let post;
    const suspender = fetch("http://localhost:8080/api/mypage/reply", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            post = data;
        });
    return {
        read() {
            if (!post) {
                throw suspender;
            } else {
                return post;
            }
        },
    };
}

function fetchPost3() {
    let post;
    const suspender = fetch("http://localhost:8080/api/mypage/scrap", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            post = data;
        });
    return {
        read() {
            if (!post) {
                throw suspender;
            } else {
                return post;
            }
        },
    };
}

function Mypage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [page, setPage] = useState(0);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <div style={{ margin: "0 auto", display: "block", width: "360px" }}>
                <h1 style={{ fontSize: "35px" }}>
                    ???????????????
                    <button onClick={openModal} className="buttons" style={{ float: "right" }}>
                        ????????????
                    </button>
                    <Link to="/mynote">
                        <button className="buttons" style={{ float: "right" }}>
                            ?????????
                        </button>
                    </Link>
                </h1>
            </div>

            <br />

            <div className="buthon">
                <button
                    className="buthony"
                    onClick={() => {
                        setPage(0);
                    }}>
                    ?????????
                </button>
                <button
                    className="buthony"
                    onClick={() => {
                        setPage(1);
                    }}>
                    ????????? ???
                </button>
                <button
                    className="buthony"
                    onClick={() => {
                        setPage(2);
                    }}>
                    ?????????
                </button>
            </div>
            <div style={{ margin: "auto", display: "block", width: "360px", textAlign: "center" }}>
                <Suspense fallback={<>... ??????</>}>
                    <List value={page === 0 ? fetchPost1() : page === 1 ? fetchPost2() : fetchPost3()}></List>
                </Suspense>
            </div>
            <Modaly open={modalOpen} close={closeModal} header="Modal heading">                {/* // Modal.js <main> {props.children} </main>??? ????????? ????????????. ????????? ????????? ?????? */}
            </Modaly>
        </>
    );
}

export default Mypage;
