import axios from 'axios'
import cheerio from 'cheerio'

async function instaDownloader(url) {
	return new Promise (async (resolve, reject) => {
		const RegPost = /(?:http(?:s|):\/\/|)(?:www\.|)instagram.com\/p\/([-_0-9A-Za-z]{5,18})/gi.exec(url)
		const RegReels = /(?:http(?:s|):\/\/|)(?:www\.|)instagram.com\/reel\/([-_0-9A-Za-z]{5,18})/gi.exec(url)
		const RegIgTv = /(?:http(?:s|):\/\/|)(?:www\.|)instagram.com\/tv\/([-_0-9A-Za-z]{5,18})/gi.exec(url)
		const RegIgUs = /(?:http(?:s|):\/\/|)(?:www\.|)instagram.com\/([-_0-9A-Za-z]{5,18})/gi.exec(url)
		try {
			if (RegIgUs) {
                let BaseUrlReel = "https://www.instagram.com/"
				const data = await axios({
					url: BaseUrlReel + RegIgUs[1] + "/?__a=1",
					method: "GET",
					headers: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
						'cookie': 'crsftoken=nm20rJm2jFpkXUquLKw0c4qwdEArdPhg; ds_user_id=37572608640; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=37572608640%3AdLIYIrAwso2GpN%3A8;'
					}
				})
                const Format = {
					link: data.data.graphql.user.profile_pic_url_hd,
                    caption: {
                        full_name: data.data.graphql.user.full_name,
                        user_name: data.data.graphql.user.username,
                        user_id: data.data.graphql.user.id,
                        followers: convertAngka(Number(data.data.graphql.user.edge_follow.count)),
                        following: (Number(data.data.graphql.user.edge_followed_by.count)),
                        bussines: data.data.graphql.user.is_business_account,
                        profesional: data.data.graphql.user.is_professional_account,
                        verified: data.data.graphql.user.is_verified,
                        private: data.data.graphql.user.is_private,
                        biography: data.data.graphql.user.biography,
                        bio_url: data.data.graphql.user.external_url,
                        profile_ed: data.data.graphql.user.profile_pic_url,
                        profile_hd: data.data.graphql.user.profile_pic_url_hd
                    }
                }
                return resolve(Format)
            } else if (RegPost) {
				let BaseUrlPost = `https://www.instagram.com/p/`
				const data = await axios({
					url: BaseUrlPost + RegPost[1] + "/?__a=1",
					method: "GET",
					headers: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
						'cookie': 'crsftoken=nm20rJm2jFpkXUquLKw0c4qwdEArdPhg; ds_user_id=37572608640; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=37572608640%3AdLIYIrAwso2GpN%3A8;'
					}
				})
				const getData = []
				for (let result of data.data.graphql.shortcode_media.display_resources) {
					getData.push({ url: result.src })
				}
				const format = {
					link: data.data.graphql.shortcode_media.video_url || getData[0].url,
                    link_two: getData[1].url || '',
                    link_three: getData[2].url || '',
					caption: {
                        username: data.data.graphql.shortcode_media.owner.username,
                        total_like: convertAngka(Number(data.data.graphql.shortcode_media.edge_media_preview_like.count)),
                        total_comment: convertAngka(Number(data.data.graphql.shortcode_media.edge_media_preview_comment.count)),
                        desc: data.data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text,
                        link_array: getData
                    }
				}
				return resolve(format)
			} else if (RegReels) {
				let BaseUrlReel = "https://www.instagram.com/reel/"
				const data = await axios({
					url: BaseUrlReel + RegReels[1] + "/?__a=1",
					method: "GET",
					headers: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
						'cookie': 'crsftoken=nm20rJm2jFpkXUquLKw0c4qwdEArdPhg; ds_user_id=37572608640; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=37572608640%3AdLIYIrAwso2GpN%3A8;'
					}
				})
				const Format = {
					link: data.data.graphql.shortcode_media.video_url,
                    caption: {
                        username: data.data.graphql.shortcode_media.owner.username,
                        thumbnail: data.data.graphql.shortcode_media.thumbnail_src,
					    total_views: convertAngka(Number(data.data.graphql.shortcode_media.video_view_count)),
					    total_plays: convertAngka(Number(data.data.graphql.shortcode_media.video_play_count)),
					    total_comment: convertAngka(Number(data.data.graphql.shortcode_media.edge_media_preview_comment.count)),
                        like: convertAngka(Number(data.data.graphql.shortcode_media.edge_media_preview_like.count)),
					    durasi: data.data.graphql. shortcode_media.video_duration
                    }
				}
				return resolve(Format)
			} else if (RegIgTv) {
				let BaseUrlIgtv = "https://www.instagram.com/tv/"
				const data = await axios({
					url: BaseUrlIgtv + RegIgTv[1] + "/?__a=1",
					method: "GET",
					headers: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
						'cookie': 'crsftoken=nm20rJm2jFpkXUquLKw0c4qwdEArdPhg; ds_user_id=37572608640; ig_did=54AA06C9-3A86-4F53-A7F6-C9127DC153AC; ig_nrcb=1; mid=YU0dFwALAAHPggeAvlvEiV8DP9zM; sessionid=37572608640%3AdLIYIrAwso2GpN%3A8;'
					}
				})
				const Format = {
					link: data.data.graphql.shortcode_media.video_url,
                    caption: {
                        title: data.data.graphql.shortcode_media.title,
                        username:  data.data.graphql.shortcode_media.owner.username,
					    thumbnail: data.data.graphql.shortcode_media.thumbnail_src,
					    total_comment: convertAngka(Number(data.data.graphql.shortcode_media.edge_media_preview_comment.count)),
					    total_view: convertAngka(Number(data.data.graphql.shortcode_media.video_view_count)),
					    total_play: convertAngka(Number(data.data.graphql.shortcode_media.video_play_count))
                    }
				}
				return resolve(Format)
            } else {
				return reject(new Error(String("Url Invalid")))
			}
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

export { 
instaDownloader
}