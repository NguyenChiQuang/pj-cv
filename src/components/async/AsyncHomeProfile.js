import Loadable from 'react-loadable'
import LoadingComponent from '../LoadingComponent';

const AsyncHomeProfile = Loadable({
    loader: () => import("../../pages/profile/home/Home"),
    loading: LoadingComponent 
})

export default AsyncHomeProfile