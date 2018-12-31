import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					time="3:30pm" 
					comment="Nice blog post!" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
						author="Alex" 
						time="4:12am" 
						comment="anyone awake?"
						avatar={faker.image.avatar()}
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					time="9:03am" 
					comment="Wow react is cool!" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};


ReactDOM.render(<App />, document.querySelector('#root'));