import React , {useEffect ,useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function SideBar() {
  const {pathname} = useRouter()  
  const [isOpenedOffer , setIsOpenedOffer] = useState(false)
  const [isOpenedAdress , setIsOpenedAdress] = useState(false)

  useEffect(()=>{
    if(pathname === '/account/uu-dai-cua-toi' || pathname === '/account/uu-dai-cua-toi/[chi-tiet-uu-dai]' || pathname === '/account/doi-diem-thuong'){
      setIsOpenedOffer(true)
    }
    if(pathname === '/account/giao-hang-tan-noi' || pathname === '/account/giao-hang-tan-noi/them-dia-chi-moi' || pathname === '/account/dat-den-lay'){
      setIsOpenedAdress(true)
    }
  }, [pathname])
  const openCollapseOffer = ()=>{
    setIsOpenedOffer(!isOpenedOffer)
  }
  const openCollapseAdress = ()=>{
    setIsOpenedAdress(!isOpenedAdress)
  }
  return (
    <div className={pathname === '/account' ? 'layout-sidebar' : 'page layout-sidebar'}>
      <ul className="side-bar">
        <li className={isOpenedOffer == true ? 'collapse-bar active' : 'collapse-bar'}>
          <a href="javascript:void(0)" onClick={()=>openCollapseOffer()}>
            <div className='arrow'>
              <img
                src="/assets/img/rewards/coolicon.svg"
                alt=""
              />
            </div>
            <div className="icon">
              <img src="/assets/img/rewards/gift.svg" alt="" />
            </div>
            Ưu đãi của tôi
          </a>
            <ul className="sub-menu">
              <li>
                <Link href={'/account/uu-dai-cua-toi'} >
                <a className={pathname === '/account/uu-dai-cua-toi'|| pathname === '/account/uu-dai-cua-toi/[chi-tiet-uu-dai]'? 'active' : null} >
                <div className='arrow'></div>
                  Ưu đãi của tôi
                </a>
                </Link>
              </li>
              <li>
              <Link href={'/account/doi-diem-thuong'}>
                <a className={pathname === '/account/doi-diem-thuong' ? 'active' : null}>
                <div className='arrow'></div>
                  Đổi điểm thưởng
                </a>
                </Link>
              </li>
            </ul>
        </li>
        <li className={isOpenedAdress == true ? 'collapse-bar active' : 'collapse-bar'}>
          <a href="javascript:void(0)"  onClick={()=>openCollapseAdress()}>
          <div className='arrow'>
              <img
                src="/assets/img/rewards/coolicon.svg"
                alt=""
              />
            </div>
            <div className="icon">
              <img src="/assets/img/rewards/location.svg" alt="" />
            </div>
            Địa chỉ giao hàng của tôi
          </a>
          <ul className="sub-menu">
            <li>
            <Link href={'/account/giao-hang-tan-noi'}>
              <a className={pathname === '/account/giao-hang-tan-noi' ||pathname ===  '/account/giao-hang-tan-noi/them-dia-chi-moi' ? 'active' : null}>
              <div className='arrow'></div>
                Giao hàng tận nơi
              </a>
              </Link>
            </li>
            <li>
            <Link href={'/account/dat-den-lay'}>
              <a className={pathname === '/account/dat-den-lay' ? 'active' : null}>
              <div className='arrow'></div>
                Đặt đến lấy
              </a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={'/account/lich-su-diem-thuong'}>
            <a  className={pathname === '/account/lich-su-diem-thuong' ? 'active' : null}>
            <div className='arrow'></div>
              <div className="icon">
                <img src="/assets/img/rewards/score.svg" alt="" />
              </div>
              Lịch sử điểm thưởng
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/account/lich-su-don-hang'}>
          <a className={pathname === '/account/lich-su-don-hang' ? 'active' : null}>
          <div className='arrow'></div>
            <div className="icon">
              <img src="/assets/img/rewards/order-history.svg" alt="" />
            </div>
            Lịch sử đơn hàng
          </a>
          </Link>
        </li>
        <li>
        <Link href={'/account/chinh-sua-thong-tin'}>
          <a className={pathname === '/account/chinh-sua-thong-tin' ? 'active' : null}>
          <div className='arrow'></div>
            <div className="icon">
              <img src="/assets/img/rewards/setting.svg" alt="" />
            </div>
            Chỉnh sửa thông tin cá nhân
          </a>
          </Link>
        </li>
        <li>
        <Link href={'/account/ho-tro'}>
          <a className={pathname === '/account/ho-tro'? 'active' : null}>
          <div className='arrow'></div>
            <div className="icon">
              <img src="/assets/img/rewards/support.svg" alt="" />
            </div>
            Hỗ trợ
          </a>
          </Link>
        </li>
        <li>
          <a href="">
          <div className='arrow'></div>
            <div className="icon">
              <img src="/assets/img/rewards/logout.svg" alt="" />
            </div>
            Đăng xuất
          </a>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
