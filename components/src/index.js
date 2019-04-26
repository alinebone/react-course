import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
	return (
	<div className="ui container comments">
		<ApprovalCard>
			<CommentDetail author="Aline" date="Today at 6:00PM" text="Blog post 1" image={faker.image.avatar()}/>
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail author="Rafael" date="Yesterday at 8:00PM" text="Blog post 2" image={faker.image.avatar()}/>
		</ApprovalCard>
		<ApprovalCard>
			<CommentDetail author="Juliana" date="Monday at 9:00AM" text="Blog post 3" image={faker.image.avatar()}/>
		</ApprovalCard>
	</div>
	);
}

ReactDOM.render(<App/>, document.querySelector('#root'));