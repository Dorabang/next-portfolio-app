interface projectsType {
  id: React.Key;
  name: String;
  link: String;
  image: String;
  category: String;
  description: String;
}

export const projects: projectsType[] = [
  {
    id: 0,
    name: 'rom&nd,',
    link: '/portfolio/romand',
    image: '../../images/romand_thum.jpg',
    category: 'HTML&CSS',
    description: '코스메틱 쇼핑몰 rom&nd 웹 리디자인',
  },
  {
    id: 1,
    name: 'Hotels Combined',
    link: '/portfolio/Hotels-Combined',
    image: '',
    category: 'HTML&CSS',
    description: '호텔 예약 가격 비교사이트, 호텔스컴바인 웹 리디자인',
  },
  {
    id: 2,
    name: 'movieApp',
    link: '/portfolio/movieApp',
    image: '',
    category: 'React',
    description: '평점별 영화 리스트 확인 사이트',
  },
  {
    id: 3,
    name: 'Todo Something',
    link: '/portfolio/Todo-something',
    image: '',
    category: 'React',
    description: '사용자별 투두리스트 등록 사이트',
  },
];
