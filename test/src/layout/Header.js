import React from "react";

function Header() {
  return (
    <>
{/* 회원 메뉴 바 시작 */}
    <nav className="py-2 bg-white border-bottom ">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              로그인
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              회원가입
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              장바구니
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2"></a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2" >
              <img src="./image/users.png" width={24} height={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis px-2">
              <img src="./image/shopping-cart.png" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
{/* 회원 메뉴 바 끝 */}
{/* 홈페이지 로고, 검색창 시작 */}
    <header className="py-3 mb-0  border-bottom">
  <div className="container d-flex flex-wrap justify-content-center align-items-center">
    <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
      <img src="./image/bruncheerslog.png" width={300} alt="Logo" />
    </a>
    <div className="container d-flex justify-content-end">
    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
      <input type="search" className="form-control" placeholder="" aria-label="Search"/>
    </form>
    </div>
  </div>
</header>
{/* 홈페이지 로고, 검색창 끝 */}
{/* 카테고리 메뉴바 시작 */}
<nav className="navbar navbar-expand-lg bg-body-white rounded mb-1 " aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginRight: '40px' }}>메뉴</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item" style={{ marginRight: '40px' }}>
              <a className="nav-link active" aria-current="page" href="#" >1일 1식</a>
            </li>
            <li className="nav-item" style={{ marginRight: '40px' }}>
              <a className="nav-link" href="#">1일 2식</a>
            </li>
            <li className="nav-item" style={{ marginRight: '40px' }}>
              <a className="nav-link" href="#">1일 3식</a>
            </li>
            <li className="nav-item" style={{ marginRight: '40px' }}>
              <a className="nav-link" href="#">공지사항</a>
            </li>
            <li className="nav-item" style={{ marginRight: '40px' }}>
              <a className="nav-link disabled" aria-disabled="true">관리자</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    {/* 카테고리 메뉴바 끝*/}
    </>
    
  );
}

export default Header;
