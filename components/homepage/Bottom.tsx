import Image from "next/image";
import logo from "../../public/logo.png";
import location from "../../public/location.svg";
import chat from "../../public/chat.svg";
import call from "../../public/call.svg";
import email from "../../public/email.svg";
import facebook from "../../public/facebook.svg";
import Link from "next/link";
import { useMedia } from "../../utils/use-media";
import NoneSSRWrapper from "../NoneSSRWrapper";
type Props = {};

const Bottom: React.FC<Props> = () => {
  const mobile = useMedia("(max-width: 600px)");

  const InfoGroup = () => {
    return (
      <NoneSSRWrapper>
      <div className={mobile ? "column_info_mobile" : "column_info"}>
        <div>
          <Image
            src={logo}
            placeholder="blur"
            width={200}
            height={100}
            alt=""
          />
        </div>
        <div className="info" style={{ paddingTop: mobile ? "20px" : "10%" }}>
          <div style={{ width: "30px", paddingTop: mobile ? 8 : "5%" }}>
            <Image src={location} width={24} height={24} alt="" />
          </div>
          <div>
            <p className="info_txt">
              {" "}
              CHIN-SU store system 1000+ Stores nationwide
            </p>
          </div>
        </div>
        <div className="info">
          <div style={{ width: "30px", paddingTop: mobile ? 0 : "5%" }}>
            <Image src={chat} width={24} height={24} alt="" />
          </div>
          <div>
            <p className="info_txt"> Have a chat with us if you need help</p>
          </div>
        </div>
        <div className="info">
          <div style={{ width: "30px", paddingTop: mobile ? 24 : "5%" }}>
            <Image src={call} width={24} height={24} alt="" />
          </div>
          <div>
            <p className="info_txt">
              {" "}
              Hotline: <br/><a href="tel:(206) 356-7092">(206) 356-7092</a> or <a href="tel:(425) 589-8788">(425) 589-8788</a> or 
              <a href="tel:(833) 324-4678">(833) 324-4678</a>
            </p>
          </div>
        </div>
        <div className="info">
          <div style={{ width: "30px", paddingTop: mobile ? 8 : "5%" }}>
            <Image src={email} width={24} height={24} alt="" />
          </div>
          <div>
            <p className="info_txt"> Email: <br/><a href="mailto:chinsu-usa@msc.masangroup.com">chinsu-usa@msc.masangroup.com</a></p>
          </div>
        </div>
      </div></NoneSSRWrapper>
    );
  };
  const SocialGroup = () => {
    return (
      <div
        className="column_social"
        style={{ marginLeft: mobile ? "16px" : "10%" }}
      >
        <div className="footer_title">social</div>
        <Link href="https://www.facebook.com/Chin-Su-Hot-sauce-104098152403719">
          <a target="_blank">
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src={facebook} width={20} height={20} alt="" />
              </div>
              <div>
                <p> FACEBOOK</p>
              </div>
            </div>
          </a>
        </Link>
        <div className="info">
          <div style={{ width: "15%" }}>
            <Image
              style={{ color: "white" }}
              src="/instagram.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
          <div>
            <p> INSTAGRAM</p>
          </div>
        </div>
        <Link href="https://www.youtube.com/playlist?list=PL8D9t2uet_UqmtDaF4Nb2uti06BxXwIaL">
          <a target="_blank">
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src="/youtube.svg" width={20} height={20} alt="" />
              </div>
              <div>
                <p> YOUTUBE</p>
              </div>
            </div>
          </a>
        </Link>
        <div className="info">
          <div style={{ width: "15%" }}>
            <Image src="/twitter.svg" width={20} height={20} alt="" />
          </div>
          <div>
            <p> TWITTER</p>
          </div>
        </div>
        <div className="info">
          <div style={{ width: "15%" }}>
            <Image src="/tiktok.svg" width={20} height={20} alt="" />
          </div>
          <div>
            <p> TIKTOK</p>
          </div>
        </div>
      </div>
    );
  };
  const ShopGroup = () => {
    return (
      <div className="column_link" style={{ marginLeft: "5%" }}>
        <div className="footer_title">SHOP</div>
        <a href="https://www.amazon.com/stores/page/CFF3F816-9E26-4AA1-8591-309E21417560?ingress=2&visitId=7a788555-2794-455a-b06e-701a762c7068&ref_=ast_bln"><p> ORIGINAL HOT SAUCE</p></a>
        <a href="https://www.amazon.com/stores/page/DCCA2642-170D-4FB0-A9AF-67E705F2BAD0?ingress=2&visitId=f77f78c6-002d-445a-842b-c5370c16cc9a&ref_=ast_bln"><p> PHỞ HOT SAUCE</p></a>
        <a href="https://www.amazon.com/stores/page/CA4FDA78-F6CD-4C19-86C9-3540C66D7E07?ingress=0&visitId=7a788555-2794-455a-b06e-701a762c7068&ref_=ast_bln"><p> CHỈ THIÊN HOT SAUCE</p></a>
        <a href="https://www.amazon.com/stores/page/66822041-FBFF-4288-89A1-23843AB8F994?ingress=2&visitId=7a788555-2794-455a-b06e-701a762c7068&ref_=ast_bln"><p> TRUFFLE HOT SAUCE</p></a>
      </div>
    );
  };
  const ExploreGroup = () => {
    return (
      <div className="column_link" style={{ marginLeft: "5%" }}>
        <div className="footer_title">EXPLORE</div>
        <p> FIND A STORE</p>
        <p> SUBSCRIPTIONS</p>
        <p> REWARDS</p>
        <p> CHIN-SU KITCHEN</p>
        <p> THE SAUCE</p>
      </div>
    );
  };
  const CompanyGroup = () => {
    return (
      <div className="column_link" style={{ marginLeft: "5%" }}>
        <div className="footer_title">COMPANY</div>
        <p> CONTACT US</p>
        <p> FAQS</p>
        <p> RETURNS</p>
        <p> PRIVACY POLICY</p>
        <p> ACCESIBILITY</p>
        <p> CCPA</p>
        <p> TERMS OF USE</p>
      </div>
    );
  };

  if (mobile)
    return (
      <footer>
        <div className="footer_mobile" style={{ paddingTop: 16 }}>
          <InfoGroup />
          <div className="_row" style={{ marginTop: 16 }}>
            <div style={{ width: "50%" }}>
              <SocialGroup />
            </div>
            <div style={{ width: "50%" }}>
              <ShopGroup />
            </div>
          </div>
          <div className="_row" style={{ marginTop: 16 }}>
            <div style={{ width: "50%" }}>
              <CompanyGroup />
            </div>
            <div style={{ width: "50%" }}>
              <ExploreGroup />
            </div>
          </div>
        </div>
      </footer>
    );
  else
    return (
      <footer>
        <div className="footer">
          <InfoGroup />
          <SocialGroup />
          <ShopGroup />
          <ExploreGroup />
          <CompanyGroup />
        </div>
      </footer>
    );
};
export default Bottom;
