import React from "react";

const BMIDetails = () => {
	return (
		<div>
			<div className="space-y-5">
				<p className="leading-10">
					BMI is a measurement of a person's leanness or corpulence based on
					their height and weight, and is intended to quantify tissue mass. It
					is widely used as a general indicator of whether a person has a
					healthy body weight for their height. Specifically, the value obtained
					from the calculation of BMI is used to categorize whether a person is
					underweight, normal weight, overweight, or obese depending on what
					range the value falls between. These ranges of BMI vary based on
					factors such as region and age, and are sometimes further divided into
					subcategories such as severely underweight or very severely obese.
					Being overweight or underweight can have significant health effects,
					so while BMI is an imperfect measure of healthy body weight, it is a
					useful indicator of whether any additional testing or action is
					required. Refer to the table below to see the different categories
					based on BMI that are used by the calculator.
				</p>
				<h1 className="text-2xl font-semibold underline underline-offset-4">
					BMI table for adults
				</h1>
				<p className="leading-10">
					This is the World Health Organization's (WHO) recommended body weight
					based on BMI values for adults. It is used for both men and women, age
					20 or old.
				</p>
				<div className="flex justify-center">
					<table className=" bg-violet-600 text-center">
						<tbody>
							<tr>
								<th className="border-[1.5px] border-white px-5 py-2 text-white">
									Category
								</th>
								<th className="border-[1.5px] border-white px-5 py-2 text-white ">
									BMI range - kg/m<sup>2</sup>
								</th>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Severe Thinness
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									&lt; 16
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Moderate Thinness
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									16 - 17
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Mild Thinness
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									17 - 18.5
								</td>
							</tr>

							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Normal
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									18.5 - 25
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Overweight
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									25 - 30
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Obese Class I
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									30 - 35
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Obese Class II
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									35 - 40
								</td>
							</tr>
							<tr>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									Obese Class III
								</td>
								<td className="border-[1.5px] border-white px-5 py-2 text-white">
									&gt; 40
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h1 className="text-2xl font-semibold underline underline-offset-4">
					Risks associated with being overweight
				</h1>
				<p className="leading-10">
					Being overweight increases the risk of a number of serious diseases
					and health conditions. Below is a list of said risks, according to the
					Centers for Disease Control and Prevention (CDC):
				</p>
				<ul className="list-disc px-8">
					<li>High blood pressure</li>
					<li>
						Higher levels of LDL cholesterol, which is widely considered "bad
						cholesterol," lower levels of HDL cholesterol, considered to be good
						cholesterol in moderation, and high levels of triglycerides
					</li>
					<li>Type II diabetes</li>
					<li>Coronary heart disease</li>
					<li>Stroke</li>
					<li>Gallbladder disease</li>
					<li>
						Osteoarthritis, a type of joint disease caused by breakdown of joint
						cartilage
					</li>
					<li>Sleep apnea and breathing problems</li>
					<li>
						Certain cancers (endometrial, breast, colon, kidney, gallbladder,
						liver)
					</li>
					<li>Low quality of life</li>
					<li>
						Mental illnesses such as clinical depression, anxiety, and others
					</li>
					<li>Body pains and difficulty with certain physical functions</li>
					<li>
						Generally, an increased risk of mortality compared to those with a
						healthy BMI
					</li>
				</ul>
				<p className="leading-10">
					As can be seen from the list above, there are numerous negative, in
					some cases fatal, outcomes that may result from being overweight.
					Generally, a person should try to maintain a BMI below 25 kg/m
					<sup>2</sup>, but ideally should consult their doctor to determine
					whether or not they need to make any changes to their lifestyle in
					order to be healthier.
				</p>
				<h1 className="text-2xl font-semibold underline underline-offset-4">
					Risks associated with being underweight
				</h1>
				<p className="leading-10">
					Being underweight has its own associated risks, listed below:
				</p>
				<ul className="list-disc px-8">
					<li>
						Malnutrition, vitamin deficiencies, anemia (lowered ability to carry
						blood vessels)
					</li>
					<li>
						Osteoporosis, a disease that causes bone weakness, increasing the
						risk of breaking a bone
					</li>
					<li>A decrease in immune function</li>
					<li>
						Growth and development issues, particularly in children and
						teenagers
					</li>
					<li>
						Possible reproductive issues for women due to hormonal imbalances
						that can disrupt the menstrual cycle. Underweight women also have a
						higher chance of miscarriage in the first trimester
					</li>
					<li>Potential complications as a result of surgery</li>
					<li>
						Generally, an increased risk of mortality compared to those with a
						healthy BMI
					</li>
				</ul>
				<p className="leading-10">
					In some cases, being underweight can be a sign of some underlying
					condition or disease such as anorexia nervosa, which has its own
					risks. Consult your doctor if you think you or someone you know is
					underweight, particularly if the reason for being underweight does not
					seem obvious.
				</p>
			</div>
		</div>
	);
};

export default BMIDetails;
