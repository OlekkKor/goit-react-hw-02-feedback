import PropTypes, { element } from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <>
        <h1>{title}</h1>
        {children}
        </>
    );
}



Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(element).isRequired
}