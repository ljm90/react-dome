import '../css/common/base.scss';
import '../css/page/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let Row6 = React.createClass({
	getDefaultProps : function () {
		return {
			title : '我们的客户'
		};
	},

    render: function () {
        return (
            <div className="cyb-row">
            	<h2 className="cyb-row-title">{this.props.title}</h2>
            	<div className="cyb-client-box"></div>
            </div>
        );
    }

});

export default Row6;
