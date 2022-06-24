// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
    {
        label: 'Men',
        key: 'Men',
    },
    {
        label: 'Women',
        key: 'Women',
    },
    {
        label: 'Kids',
        key: 'KidsSubMenu',
        // children: [
        //     {
        //         type: 'group',
        //         label: 'Item 1',
        //         children: [
        //             {
        //                 label: 'Option 1',
        //                 key: 'setting:1',
        //             },
        //             {
        //                 label: 'Option 2',
        //                 key: 'setting:2',
        //             },
        //         ],
        //     },
        //     {
        //         type: 'group',
        //         label: 'Item 2',
        //         children: [
        //             {
        //                 label: 'Option 3',
        //                 key: 'setting:3',
        //             },
        //             {
        //                 label: 'Option 4',
        //                 key: 'setting:4',
        //             },
        //         ],
        //     },
        // ],
    },
    {
        label: 'Sport',
        key: 'SportsSubMenu',
        // children: [
        //     {
        //         type: 'group',
        //         label: 'Item 1',
        //         children: [
        //             {
        //                 label: 'Option 1',
        //                 key: 'setting:1',
        //             },
        //             {
        //                 label: 'Option 2',
        //                 key: 'setting:2',
        //             },
        //         ],
        //     },
        //     {
        //         type: 'group',
        //         label: 'Item 2',
        //         children: [
        //             {
        //                 label: 'Option 3',
        //                 key: 'setting:3',
        //             },
        //             {
        //                 label: 'Option 4',
        //                 key: 'setting:4',
        //             },
        //         ],
        //     },
        // ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Company Karma
            </a>
        ),
        key: 'companykarma',
    },
];

export default function Navbar(){
    const [current, setCurrent] = useState('men');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

