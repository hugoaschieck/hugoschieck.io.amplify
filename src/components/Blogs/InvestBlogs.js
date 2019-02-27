import React from 'react';
import fidofund from '../Images/fido_fund_compare.png'
import jimcramergetrich from '../Images/jimcramer.png'
import './Blogs.css';
import './InvestBlogs.css';

const InvestBlogs = props => {
    return (
        <div className="invest-blogs">

            <p className="blog-date">January 29, 2019</p>
            <h3>Why Investing?</h3>
            <p>
                My “investing” started as I got my first job out of college, ironically, for a very large financial services company whose bread and butter is administering mutual funds, 401Ks, etc.. My job had nothing to do with investing.
                The important part, was that I was automatically enrolled into the company 401K plan contributing the full amount up to the company match.  I even did that thing where my contributions would increase by 1% every year without
                me knowing it.  While I was completely ignorant on how it all worked, it turns out that this was actually a really great start.  These two things, automatic enrollment and company matching, are probably the only two good
                things about 401Ks.
            </p>
            <p>
                OK, I’m in the game, now, which fund do I to choose?  Well, I quickly calculated how many years to age 65 and chose one of those target date retirement funds.  The easy, obvious choice. Now set it and forget it.
            </p>
            <p>
                Fast forward 10 years:
            </p>
            <p style={{ display: "inline", float: "right", alignItems: "center" }}>
                <img src={jimcramergetrich} alt="jimcramer" style={{ display: "inline", float: "left", marginRight: "1rem" }}></img>
                <p>
                    One day, I’m home watching my one year old son. He’s just started crawling.  So, I’m crawling around, and rolling on the floor, because, well, it was fun.  Then,  I spotted a book on the shelf that my father had just given
                    to me: Jim Cramer's Stay Mad for Life: Get Rich, Stay Rich (Make Your Kids Even Richer). I looked at the book, I looked at my son, I looked at the book again… needless to say, the title hooked me, especially the “make your
                    kids even richer” part.  I figured the least that I could do was give my son a 20 year head start.  I finished the book in two days.
                </p>

                <p>
                    Jim Cramer.  I know what you’re thinking.  Yes, he’s that crazy loud guy that screams about stocks on television. He’s passionate.  While entertaining, please don’t watch his show for stock tips.  I’ll just leave it at that.
                    But, I did learn two very important takeaways from his book.
                </p>
                
                <p>
                    First, only contribute up to your employers matching percentage. No more. If you want to contribute more, put it into an IRA.  You’ll need to decide which type of IRA makes sense for you.  Why do this?  In an IRA, you have
                    full control over your investment choices.
                </p>
                
                <p>
                    Second, in your 401K, simply choose to allocate all of your contributions into a passively managed index fund.  Forget those “target retirement” funds, or some “emerging market” fund that promises an exceptional rate of return.
                    Any additional percentage points that you might gain from an actively managed fund, you’ll be giving right back in management fees.  Do the math.  The difference between a 0.04% and a 0.5% management fee could amount to a 20-40%
                    difference in your total returns after 30 years, if not more.  As I’ve come to learn, other investment kings make the same suggestion, most notably, the oracle himself, Warren Buffett.
                </p>

            </p>

            <p>
                Here’s a simple example: Not only did the Fidelity Freedom 2040 Fund underperform the Fidelity 500 Index Fund by ~28% in the last 10 years, one would have paid significantly more in management fees for that lack of performance.
                That’s outrageous.

            </p>

            <p><img src={fidofund} alt="fidofund"></img></p>

            <p>
                Needless to say, once I figured this all out, I had a small stroke, and immediately reduced my 401K contributions down to my company match rate, opened a personal IRA account, and funneled the rest of my contributions there.
                Not only that, but I also rolled over portions of my assets from my active 401K plan to my IRA plan.  Some plans will allow you to do this.  You don’t necessarily have to wait to change employers to roll over your 401K to an IRA.
                I continue to do this a couple times per year.
            </p>

            <p>
                After all this, where did I land?  Maxing 401K contributions up to company match, allocated in my plans equivalent passively managed S&P 500 Index Fund.  The remaining contributions going to my personal IRA, again allocated in the
                available managed S&P 500 Index Fund.
            </p>

            <p>
                OK now I’m good. Set it and forget it right? Maybe for some, but after several months, my strategy changed again.
            </p>

            <p>
                Next time, I’ll get into how my IRA investment strategy changed, why, and perhaps will share some results.
            </p>

            <p>
                -Hugo
            </p>

        </div>
    )
}

export default InvestBlogs;