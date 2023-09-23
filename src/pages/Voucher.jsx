import { HeroCommon } from "../components/HeroCommon/HeroCommon"
import { Discover } from "../components/Discover/Discover"
import { BenefitsInclude } from "../components/BenefitsInclude/BenefitsInclude"
import { ContactUs } from '../components/ContactUs/ContactUs';

export const Voucher = () => {
    const benefitInfo = [
        {
            svgName: 'icon-hand-thumb-up',
            title: 'Uncompromising Quality',
            descr: 'With Aesthetica vouchers, you can be confident that your loved ones will receive the highest level of care. Our dedication to quality shines through in every aspect, from exceptional customer service to outstanding results. We only use top-quality products and employ highly educated professionals who are committed to providing the best possible experience.'
        },
        {
            svgName: 'icon-cool',
            title: 'Confidence boost',
            descr: 'Give the gift of confidence with our vouchers, allowing your loved ones to enhance their natural beauty and self-assurance.'
        },
        {
            svgName: 'icon-heart',
            title:  'A Thoughtful Gesture',
            descr: 'Our voucher is more than a present, it’s a symbol of care, appreciation, and thoughtfulness. Whether it is a birthday, anniversary, token of gratitude, or an expression of love, our gift cards eloquently convert sentiments that words can’t capture.'
        }
    ]

    return <main>
        <HeroCommon title='Spread the love with Aesthetica Gift Vouchers' buttonText='Buy gift vouchers' />
        <Discover />
        <BenefitsInclude benefits={benefitInfo} three='true' gift='true' />
        <ContactUs />
    </main>
}