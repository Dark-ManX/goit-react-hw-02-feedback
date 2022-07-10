import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <section>
            <p>{title}</p>
            {children}
        </section>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string,
}