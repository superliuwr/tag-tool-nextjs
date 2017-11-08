import CustomHead from '../components/Head'
import Layout from '../components/BasicLayout'
import TagManager from '../components/TagManager'

const Index = () => (
    <div>
        <CustomHead title="Tag Management" />
        <Layout>
            <TagManager />
        </Layout>
    </div>
)

export default Index