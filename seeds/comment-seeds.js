const { Comment } = require('../models');

const comment_data = [
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Egestas purus viverra accumsan in nisl nisi scelerisque.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Ut sem nulla pharetra diam sit amet nisl.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Porttitor massa id neque aliquam vestibulum morbi blandit. Ac odio tempor orci dapibus ultrices in.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'Est velit egestas dui id ornare. Eget sit amet tellus cras adipiscing enim eu. ',
    user_id: 2,
    post_id: 5
  },
  {
    comment_text: 'Auctor neque vitae tempus quam pellentesque nec. Orci phasellus egestas tellus rutrum tellus.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 2,
    post_id: 4
  }
];

const commentSeeds = () => Comment.bulkCreate(comment_data);

module.exports = commentSeeds;