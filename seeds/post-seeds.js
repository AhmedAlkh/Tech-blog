const { Post } = require('../models');

const post_data = [
  {
    title: 'Varius morbi enim',
    post_content: 'Vel pharetra vel turpis nunc eget lorem dolor sed. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Sed enim ut sem viverra aliquet eget sit amet. Vitae tempus quam pellentesque nec nam aliquam sem et tortor.',
    user_id: 1
  },
  {
    title: 'Tortor pretium',
    post_content: 'Et netus et malesuada fames ac. Eget nunc lobortis mattis aliquam faucibus purus in. Magna eget est lorem ipsum dolor sit. Turpis egestas sed tempus urna.',
    user_id: 2
  },
  {
    title: 'Metus dictum',
    post_content: 'Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Arcu non sodales neque sodales ut etiam. Euismod in pellentesque massa placerat duis ultricies lacus sed.',
    user_id: 3
  },
  {
    title: 'Ultricies lacus sed',
    post_content: 'Ornare massa eget egestas purus viverra accumsan in nisl. In massa tempor nec feugiat nisl pretium fusce. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna.',
    user_id: 1
  },
  {
    title: 'Sapien nec sagittis',
    post_content: 'Leo a diam sollicitudin tempor id eu nisl nunc. Feugiat vivamus at augue eget. Aliquet risus feugiat in ante metus dictum at tempor commodo.',
    user_id: 3
  }
];

const postSeeds = () => Post.bulkCreate(post_data);

module.exports = postSeeds;