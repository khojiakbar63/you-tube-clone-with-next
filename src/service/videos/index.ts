import {req} from '@/service/axios.config'


export const getVideos = {
    All: async () => {
        const res = await req.get('/movies')
        return res.data
    },
  

}