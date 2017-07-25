import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "Representativeness heuristic",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "the tendency to judge something as belonging to a class based on a few salient characteristics without accounting for base rates of those characteristics. For example, the belief that one will not become an alcoholic because one lacks some characteristic of an alcoholic stereotype, or, that one has a higher probability to win the lottery because one buys tickets from the same kind of vendor as several known big winners."
       },
       {
         "name": "Part-list cueing effect",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "That being shown some items from a list and later retrieving one item causes it to become harder to retrieve the other items."
       },
       {
         "name": "Peak–end rule",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "That people seem to perceive not the sum of an experience but the average of how it was at its peak (e.g., pleasant or unpleasant) and how it ended."
       },
       {
         "name": "Persistence",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "The unwanted recurrence of memories of a traumatic event."
       },
       {
         "name": "Picture superiority effect",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "The notion that concepts that are learned by viewing pictures are more easily and frequently recalled than are concepts that are learned by viewing their written word form counterparts."
       },
       {
         "name": "Positivity effect",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "That older adults favor positive over negative information in their memories."
       },
       {
         "name": "Primacy effect, Recency effect & Serial position effect",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "That items near the end of a sequence are the easiest to recall, followed by the items at the beginning of a sequence; items in the middle are the least likely to be remembered."
       }, {
        "name": "Processing difficulty effect",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "That information that takes longer to read and is thought about more (processed with more difficulty) is more easily remembered."
       }, {
        "name": "Reminiscence bump",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "The recalling of more personal events from adolescence and early adulthood than personal events from other lifetime periods"
       }, {
        "name": "Rosy retrospection",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "The remembering of the past as having been better than it really was."
       }, {
        "name": "Self-relevance effect",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "That memories relating to the self are better recalled than similar information relating to others."
       }, {
        "name": "Source confusion",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "Confusing episodic memories with other information, creating distorted memories."
       }, {
        "name": "Spacing effect",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "That information is better recalled if exposure to it is repeated over a long span of time rather than a short one."
       }, {
        "name": "Spotlight effect (personalisation?)",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "The tendency to overestimate the amount that other people notice your appearance or behaviour."
       }, {
        "name": "Suggestibility",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "A form of misattribution where ideas suggested by a questioner are mistaken for memory."
       }, {
        "name": "Telescoping effect",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "The tendency to displace recent events backward in time and remote events forward in time, so that recent events appear more remote, and remote events, more recent.  Testing effect    The fact that you more easily remember information you have read by rewriting it instead of rereading it."
       }, {
        "name": "Tip of the tongue phenomenon",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "When a subject is able to recall parts of an item, or related information, but is frustratingly unable to recall the whole item. This is thought an instance of 'blocking' where multiple similar memories are being recalled and interfere with each other."
       }, {
        "name": "Travis Syndrome",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Overestimating the significance of the present. It is related to the enlightenment Idea of Progress and Chronological snobbery with possibly an appeal to novelty logical fallacy being part of the bias."
       }, {
        "name": "Verbatim effect",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "That the 'gist' of what someone has said is better remembered than the verbatim wording. This is because memories are representations, not exact copies."
       }, {
        "name": "Von Restorff effect",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "That an item that sticks out is more likely to be remembered than other items."
       }, {
        "name": "Zeigarnik effect",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "That uncompleted or interrupted tasks are remembered better than completed ones."
       }, {
        "name": "Fundamental attribution error (FAE) / correspondence bias",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "The tendency for people to over-emphasize personality-based explanations for behaviours observed in others. At the same time, individuals under-emphasize the role and power of situational influences on the same behaviour. Despite being made aware that the target’s speech direction was assigned to the writer, participants ignored the situational pressures and attributed pro-Castro attitudes to the writer when the speech represented such attitudes."
       }, {
        "name": "Belief bias",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "When one's evaluation of the logical strength of an argument is biased by their belief in the truth or falsity of the conclusion."
       }, {
        "name": "Salience (a.k.a. perceptual salience)",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "The tendency to focus on the most easily recognisable features of a person or concept.  An example would be someone who watches the news and sees several news stories of violence in their city. Although their likelihood of being a victim of violence has not changed the memory of the violence is very salient in their mind and makes them feel more vulnerable when they go out.  When you think about the lottery, you can easily imagine winning because you’ve heard of someone who won, but fail to think about all the people that lost?"
       }, {
        "name": "Information Bias",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "The tendency to seek information when it does not affect action.  More info is not always better.  With less info people can often make more accurate predictions."
       }, {
        "name": "Self-serving bias",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "The tendency to claim more responsibility for successes than failures. It may also manifest itself as a tendency for people to evaluate ambiguous information in a way beneficial to their interests."
       }, {
        "name": "Sensory leakage",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "Used to refer to information that transferred to a person by conventional means (other than Psi) during an experiment into Psi.  For example, where the subject in an ESP experiment receives a visual cue — the reflection of a Zener card in the holder's glasses — sensory leakage can be said to have occurred."
       }, {
        "name": "Anchoring or focalism",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "The tendency to rely too heavily, or 'anchor', on one trait or piece of information when making decisions (usually the first piece of information that we acquire on that subject)"
       }, {
        "name": "Automation bias",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "The tendency to excessively depend on automated systems which can lead to erroneous automated information overriding correct decisions."
       }, {
         "name": "Confirmation bias",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "The tendency to search for, interpret, focus on and remember information in a way that confirms one's preconceptions.  The effect is stronger for emotionally charged issues and for deeply entrenched beliefs.  Explanations for the observed biases include wishful thinking and the limited human capacity to process information."
       }, {
         "name": "Curse of knowledge",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "When better-informed people find it extremely difficult to think about problems from the perspective of lesser-informed people."
       }, {
         "name": "Declinism",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "The belief that a society or institution is tending towards decline. Particularly, it is the predisposition to view the past favourably and future negatively."
       }, {
         "name": "Dunning-Kruger effect",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "The tendency for unskilled individuals to overestimate their own ability and the tendency for experts to underestimate their own ability."
       }, {
         "name": "Empathy gap",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "The tendency to underestimate the influence or strength of feelings, in either oneself or others."
       }, {
         "name": "Forer effect",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "The observation that individuals will give high accuracy ratings to descriptions of their personality that supposedly are tailored specifically for them, but are in fact vague and general enough to apply to a wide range of people. This effect can provide a partial explanation for the widespread acceptance of some beliefs and practices, such as astrology, fortune telling, graphology, and some types of personality tests."
       }, {
         "name": "Frequency illusion  / Baader-Meinhof Phenomenon",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "The illusion in which a word, a name, or other thing that has recently come to one's attention suddenly seems to appear with improbable frequency shortly afterwards (not to be confused with the recency illusion or selection bias)."
       }, {
         "name": "Gambler's fallacy",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "The tendency to think that future probabilities are altered by past events, when in reality they are unchanged. The fallacy arises from an erroneous conceptualization of the law of large numbers. For example, \"I've flipped heads with this coin five times consecutively, so the chance of tails coming out on the sixth flip is much greater than heads.\""
       }, {
         "name": "Hindsight bias",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Sometimes called the \"I-knew-it-all-along\" effect, the tendency to see past events as being predictable at the time those events happened."
       }, {
         "name": "The \"hot-hand fallacy\"",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "The fallacious belief that a person who has experienced success with a random event has a greater chance of further success in additional attempts."
       }, {
         "name": "Hyperbolic discounting",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "Discounting is the tendency for people to have a stronger preference for more immediate payoffs relative to later payoffs. Hyperbolic discounting leads to choices that are inconsistent over time – people make choices today that their future selves would prefer not to have made, despite using the same reasoning. Also known as current moment bias, present-bias, and related to Dynamic inconsistency."
       }, {
         "name": "IKEA effect",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "The tendency for people to place a disproportionately high value on objects that they partially assembled themselves, such as furniture from IKEA, regardless of the quality of the end result."
       }, {
         "name": "Illusion of control",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "The tendency to overestimate one's degree of influence over other external events."
       }, {
         "name": "Illusory correlation",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "Inaccurately perceiving a relationship between two unrelated events."
       }, {
         "name": "Irrational escalation / sunk cost fallacy",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "The phenomenon where people justify increased investment in a decision, based on the cumulative prior investment, despite new evidence suggesting that the decision was probably wrong."
       }, {
         "name": "Overconfidence effect",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Excessive confidence in one's own answers to questions. For example, for certain types of questions, answers that people rate as \"99% certain\" turn out to be wrong 40% of the time."
       }, {
         "name": "Pareidolia",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "A vague and random stimulus (often an image or sound) is perceived as significant, e.g., seeing images of animals or faces in clouds, the man in the moon, and hearing non-existent hidden messages on records played in reverse."
       }, {
         "name": "Pessimism bias",
         "profilePic": "assets/img/speakers/duck.jpg",
         "about": "The tendency for some people, especially those suffering from depression, to overestimate the likelihood of negative things happening to them."
       }, {
         "name": "Semmelweis reflex",
         "profilePic": "assets/img/speakers/eagle.jpg",
         "about": "The tendency to reject new evidence that contradicts a paradigm.  The story of Ignaz Semmelweis, who discovered that childbed fever mortality rates reduced ten-fold when doctors washed their hands with a chlorine solution between patients and, most particularly, after an autopsy (at the institution where Semmelweis worked, a university hospital, physicians performed autopsies on every deceased patient). Semmelweis's decision stopped the ongoing contamination of patients—mostly pregnant women—with cadaverous particles. His hand-washing suggestions were rejected by his contemporaries, often for non-medical reasons. For instance, some doctors refused to believe that a gentleman's hands could transmit disease. That was 1847.  The reaction of his contemporaries was not positive; his subsequent mental disintegration led to him being confined to an insane asylum, where he died in 1865.  The failure of the nineteenth-century scientific community to recognize Semmelweis's findings, and the nature of the flawed critiques, helped advance a positivist epistemology, leading to the emergence of evidence-based medicine."
       }, {
         "name": "Subjective validation",
         "profilePic": "assets/img/speakers/elephant.jpg",
         "about": "A person will consider a statement or another piece of information to be correct if it has any personal meaning or significance to them. In other words, a person whose opinion is affected by subjective validation will perceive two unrelated events (i.e., a coincidence) to be related because their personal belief demands that they be related. Closely related to the Forer effect, subjective validation is an important element in cold reading. It is considered to be the main reason behind most reports of paranormal phenomena."
       }, {
         "name": "Unit bias",
         "profilePic": "assets/img/speakers/puppy.jpg",
         "about": "The tendency to want to finish a given unit of a task or an item. Strong effects on the consumption of food in particular."
       }, {
         "name": "Well travelled road effect",
         "profilePic": "assets/img/speakers/mouse.jpg",
         "about": "Underestimation of the duration taken to traverse oft-traveled routes and overestimation of the duration taken to traverse less familiar routes."
       }, {
         "name": "Zero-sum heuristic",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "Intuitively judging a situation to be zero-sum (i.e., that gains and losses are correlated). Derives from the zero-sum game in game theory, where wins and losses sum to zero. The frequency with which this bias occurs may be related to the social dominance orientation personality factor."
       }, {
         "name": "Social dominance orientation (SDO)",
         "profilePic": "assets/img/speakers/cheetah.jpg",
         "about": "A personality trait which predicts social and political attitudes, is conceptualised as a measure of an individual's preference for hierarchy.  Individuals who score high in SDO desire to maintain and, in many cases, increase the differences between social statuses of different groups. Typically, they are dominant, driven, tough, and relatively uncaring seekers of power. People high in SDO also prefer hierarchical group orientations. Often, people who score high in SDO adhere strongly to belief in a \"dog-eat-dog\" world. It has also been found that men are generally higher than women in SDO measures."
       }
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
