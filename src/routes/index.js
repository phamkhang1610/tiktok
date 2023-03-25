import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from "~/pages/Following";
import Upload from '~/pages/Upload';


const publicRoutes = [
    // dùng cho định tuyến ko cần đăng nhập mà vẫn xem được
    { path:'/', component: Home },
    { path:'/following', component: Following},
    { path:'/upload', component: Upload, layout: HeaderOnly},
]
const privateRoutes = [
    // dùng cho định tuyến cần đăng nhập
]

export { publicRoutes, privateRoutes}