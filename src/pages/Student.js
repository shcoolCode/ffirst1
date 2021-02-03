import React from "react";
import "../App.css";

function Student() {
  return (
    <div className="content">
      <header className="header_frame">학생 정보 관리</header>
      <div className="content_frame">
        <div className="first_table">
          <h1>학생 승인 요청</h1>

          <table border="3" className="table_style">
            <th>반</th>
            <th>이름</th>
            <th>핸드폰 번호</th>
            <th>승인</th>
            <tr className="tr_center">
              <td>5</td>
              <td>김상우</td>
              <td>01046276266</td>
              <button>확인</button>
            </tr>

            <tr className="tr_center">
              <td>6</td>
              <td>김도윤</td>
              <td>01046276266</td>
              <button>확인</button>
            </tr>

            <tr className="tr_center">
              <td>7</td>
              <td>김예림</td>
              <td>01049325555</td>
              <button>확인</button>
            </tr>
          </table>
        </div>

        <div className="second_table">
          <h1>기존유저</h1>

          <table border="3" className="table_style">
            <th>반</th>
            <th>이름</th>
            <th>핸드폰 번호</th>
            <th>제거</th>
            <tr className="tr_center">
              <td>5</td>
              <td>홍석용</td>
              <td>01046276266</td>
              <button>제거</button>
            </tr>

            <tr className="tr_center">
              <td>6</td>
              <td>박원용</td>
              <td>01046276266</td>
              <button>제거</button>
            </tr>

            <tr className="tr_center">
              <td>7</td>
              <td>문재인</td>
              <td>01049325555</td>
              <button>제거</button>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Student;
