import { ImInstagram,ImTwitter,ImYoutube,ImHome } from "react-icons/im"
import Link from 'next/link'

export default function Footer(){
    return(
        <Footer className="bg-gray-50">
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    {/* <div className="flex gap-6 justify-center">
                        <Link href={"https://www.instagram.com/"}><ImInstagram /></Link>
                        <Link href={"https://twitter.com/i/flow/login?redirect_after_login=%2F"}><ImTwitter /></Link>
                        <Link href={"https://www.youtube.com/"}><ImYoutube /></Link>
                    </div> */}
                    <p className="py-5 text-gray-400">Copyright @2023 All rights reserved</p>  
                    <p className="text-gray-400 text-center">Terms & Conditions</p>                   
                </div>
            </div>
        </Footer>
    )
}

