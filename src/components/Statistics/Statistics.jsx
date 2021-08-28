import PropTypes from 'prop-types';
import { Section, Title, StatList, Item, Label } from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => {
          return (
            <Item key={item.id}>
              <Label>{item.label}</Label>
              <span>{item.percentage}%</span>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
