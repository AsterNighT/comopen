'use client'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography/Typography';
import BasicTabs from '@/components/maintab';
import Hash from '@/components/tabs/hash';
import HashWithR from '@/components/tabs/hash-with-r';
import Link from 'next/link';

export default function Home() {
    let componets = [
        {
            label: "Hash(SHA1)",
            component: <Hash></Hash>
        }, {
            label: "Hash with Randomness(SHA1)",
            component: <HashWithR></HashWithR>
        }
    ]
    return (
        <Container maxWidth="md">
            <Typography variant="h3" gutterBottom>
                Commit and open a message
            </Typography>
            <Typography gutterBottom>
                如何异步地完成“我们俩同时公布一个消息”？
            </Typography>
            {BasicTabs(componets)}
            <Typography gutterBottom>
                有时候我们需要让两个人同时公开一些东西。比方说，我们用QQ玩石头剪刀布。两个诚实的玩家Alice和Bob可以商量好，Alice在选择自己出什么之后，把自己的选择发给Bob，Bob比较自己的选择和Alice的选择，然后再把最后的结果发给Alice。在双方都是诚实的情况下，这样的协议是当然是可以保证公平的。但是如果Bob是坏蛋，他每次都是先看到Alice出什么，然后再选可以获胜的手势，这样的话Alice就永远也赢不了了。<br /><br />
                这个场景如果在现实生活中，我们可以让Alice和Bob同时把自己的选择写在一张纸上，然后同时公布。但是在网络上，我们怎么做到这一点呢？我们可以用commitment来解决这个问题。Alice和Bob首先约定一个commitment算法，分别公开自己的commitment，然后再公开自己的选择。这样的话，Alice和Bob都不能改变自己的选择，因为他们的commitment已经公开了。这样的话，Alice和Bob就可以在网络上同时公开自己的选择了。<br /><br />
                Commitment的具体要求和实现都比较复杂，你可以看到这里有些算法有随机性，有些没有（想一想，为什么？）如果你有兴趣的话，可以看看<Link href="/commitment">这里</Link>的额外废话。
            </Typography>
        </Container>
    )
}
